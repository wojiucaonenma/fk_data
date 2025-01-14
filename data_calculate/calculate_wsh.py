from werkzeug.utils import redirect
from flask import current_app
from db_class import *
import configparser,time
from threading import Thread
cf = configparser.ConfigParser()
def gui(mxk_value_dict):
    mxk_value_dict_gui={}
    for year in mxk_value_dict:
        mxk_value_dict_gui[year]={}
        for indicator_id in mxk_value_dict[year]:
            value_list=list(mxk_value_dict[year][indicator_id].values())
            max_value=max(value_list)
            min_value=min(value_list)
            r = max_value - min_value
            value_list=[(x-min_value)/r for x in value_list]
            region_list=list(mxk_value_dict[year][indicator_id].keys())
            len_value=len(value_list)
            for i in range(len_value):
                if not indicator_id in mxk_value_dict_gui[year]:
                    mxk_value_dict_gui[year][indicator_id]={}
                value_gui=value_list[i]*100
                mxk_value_dict_gui[year][indicator_id][region_list[i]]=value_gui
    return mxk_value_dict_gui

def get_org(field_v,scope_v):
    app = current_app._get_current_object()
    if field_v=='all' :
        fs_list=[]
        pp_list=mxk_value.query.all()
        for pp in pp_list:
            row=[pp.field,pp.scope]
            if not row in fs_list:
                t=Thread(target=get_org1,args=(app,pp.field,pp.scope,))
                t.start()
                t.join()
                fs_list.append(row)
        return 1
    else:

        return get_org1(app,field_v,scope_v)

def get_org1(app,field_v,scope_v):
    with app.app_context():
        org_model=0
        pp_list_sys=Mxk_indicator_system.query.filter_by(field=field_v,scope=scope_v).all()
        pp_list_value=mxk_value.query.filter_by(field=field_v,scope=scope_v).all()
        eva_level_list=[]
        for pp in pp_list_value:
            eva_level=pp.eva_level
            org_code=pp.org_id
            if not org_code:
                break
            else:
                org_model=1
            if not eva_level in eva_level_list:
                eva_level_list.append(eva_level)
        if org_model:
            db.session.query(mxk_measure).filter(mxk_measure.field==field_v,mxk_measure.scope==scope_v).delete()
            for eva_level in eva_level_list:
                pp_list_value=mxk_value.query.filter_by(field=field_v,scope=scope_v,eva_level=eva_level).all()
                indicator_id2name={}
    
                root_indicator=''
                indicator_1=[]
                indicator_1_dict={}
                indicator_2=[]
                indicator_2_dict={}
                indicator_3=[]
                indicator_3_dict={}
                for pp in pp_list_sys:
                    indicator_name=pp.indicator_name
                    indicator_id=str(pp.indicator_id)
                    indicator_id2name[indicator_id]=indicator_name
                    if field_v==indicator_name:
                        root_indicator=indicator_id
                    parentId=pp.parentId
                    weight=pp.weight
                    if parentId == root_indicator:
                        indicator_1.append(indicator_id)
                        if parentId not in indicator_1_dict:
                            indicator_1_dict[parentId] = [[indicator_id,weight]]
                        else:
                            indicator_1_dict[parentId].append([indicator_id,weight])
                    if parentId in indicator_1:
                        indicator_2.append(indicator_id)
                        if parentId not in indicator_2_dict:
                            indicator_2_dict[parentId]=[[indicator_id,weight]]
                        else:
                            indicator_2_dict[parentId].append([indicator_id,weight])
                    if parentId in indicator_2:
                        indicator_3.append(indicator_id)
                        if parentId not in indicator_3_dict:
                            indicator_3_dict[parentId]=[[indicator_id,weight]]
                        else:
                            indicator_3_dict[parentId].append([indicator_id,weight])
        
        
        
                mxk_value_dict={}
                region_code_list=[]
                
        
                for pp in pp_list_value:
                    indicator_id=str(pp.indicator_id)
                    region_code=pp.region_code
                    region_code_1=pp.region_code
                    org_code=pp.org_id
                    if org_model==1:
                        region_code=org_code
                    indicator_value=pp.indicator_value
                    year=pp.year
                    if not year in mxk_value_dict:
                        mxk_value_dict[year]={}
                    if not indicator_id in mxk_value_dict[year]:
                        mxk_value_dict[year][indicator_id]={}
                    mxk_value_dict[year][indicator_id][region_code]=indicator_value
        
                #归一化
                gui_3=gui(mxk_value_dict)
                gui_2_value={}
                for year in gui_3:
                    gui_2_value[year]={}
                    gui_3_=gui_3[year]
                    for indicator_id in gui_3_:
                    
                        for region in gui_3_[indicator_id]:
                            for indicator_id_2  in indicator_3_dict:
                                if not indicator_id_2 in gui_2_value[year]:
                                    gui_2_value[year][indicator_id_2]={}
                                value=0
                                son_list=indicator_3_dict[indicator_id_2]
                                for son in son_list:
                                    son_id=son[0]
                                    son_weight=son[1]
                                    value_son=gui_3_[son_id][region]*son_weight
                                    value+=value_son
                                gui_2_value[year][indicator_id_2][region]=value
                gui_2=gui(gui_2_value)
        
                gui_1_value={}
                for year in gui_2:
                    gui_1_value[year]={}
                    gui_2_=gui_2[year]
                    for indicator_id in gui_2_:
                    
                        for region in gui_2_[indicator_id]:
                            for indicator_id_1  in indicator_2_dict:
                                if not indicator_id_1 in gui_1_value[year]:
                                    gui_1_value[year][indicator_id_1]={}
                                value=0
                                son_list=indicator_2_dict[indicator_id_1]
                                for son in son_list:
                                    son_id=son[0]
                                    son_weight=son[1]
                                    value_son=gui_2_[son_id][region]*son_weight
                                    value+=value_son
                                gui_1_value[year][indicator_id_1][region]=value
                #gui_1=gui(gui_1_value)
        
        
                gui_0_value={}
                for year in gui_1_value:
                    gui_1_=gui_1_value[year]
                    gui_0_value[year]={}
                    for indicator_id in gui_1_:
                    
                        for region in gui_1_[indicator_id]:
                            for indicator_id_0  in indicator_1_dict:
                                if not indicator_id_0 in gui_0_value[year]:
                                    gui_0_value[year][indicator_id_0]={}
                                value=0
                                son_list=indicator_1_dict[indicator_id_0]
                                for son in son_list:
                                    son_id=son[0]
                                    son_weight=son[1]
                                    value_son=gui_1_[son_id][region]*son_weight
                                    value+=value_son
                                gui_0_value[year][indicator_id_0][region]=value
                #gui_0=gui(gui_0_value)
        
                
                for guix in [gui_3,gui_2,gui_1_value,gui_0_value]:
                    result_input(guix,indicator_id2name,field_v,scope_v,org_model,region_code_1)
        else:

            indicator_id2name={}
    
            root_indicator=''
            indicator_1=[]
            indicator_1_dict={}
            indicator_2=[]
            indicator_2_dict={}
            indicator_3=[]
            indicator_3_dict={}
            for pp in pp_list_sys:
                indicator_name=pp.indicator_name
                indicator_id=str(pp.indicator_id)
                indicator_id2name[indicator_id]=indicator_name
                if field_v==indicator_name:
                    root_indicator=indicator_id
                parentId=pp.parentId
                weight=pp.weight
                if parentId == root_indicator:
                    indicator_1.append(indicator_id)
                    if parentId not in indicator_1_dict:
                        indicator_1_dict[parentId] = [[indicator_id,weight]]
                    else:
                        indicator_1_dict[parentId].append([indicator_id,weight])
                if parentId in indicator_1:
                    indicator_2.append(indicator_id)
                    if parentId not in indicator_2_dict:
                        indicator_2_dict[parentId]=[[indicator_id,weight]]
                    else:
                        indicator_2_dict[parentId].append([indicator_id,weight])
                if parentId in indicator_2:
                    indicator_3.append(indicator_id)
                    if parentId not in indicator_3_dict:
                        indicator_3_dict[parentId]=[[indicator_id,weight]]
                    else:
                        indicator_3_dict[parentId].append([indicator_id,weight])
    
    
    
            mxk_value_dict={}
            region_code_list=[]
            
    
            for pp in pp_list_value:
                indicator_id=str(pp.indicator_id)
                region_code=pp.region_code
                region_code_1=pp.region_code
                org_code=pp.org_id
                if org_model==1:
                    region_code=org_code
                indicator_value=pp.indicator_value
                year=pp.year
                if not year in mxk_value_dict:
                    mxk_value_dict[year]={}
                if not indicator_id in mxk_value_dict[year]:
                    mxk_value_dict[year][indicator_id]={}
                mxk_value_dict[year][indicator_id][region_code]=indicator_value
    
            #归一化
            gui_3=gui(mxk_value_dict)
            gui_2_value={}
            for year in gui_3:
                gui_2_value[year]={}
                gui_3_=gui_3[year]
                for indicator_id in gui_3_:
                
                    for region in gui_3_[indicator_id]:
                        for indicator_id_2  in indicator_3_dict:
                            if not indicator_id_2 in gui_2_value[year]:
                                gui_2_value[year][indicator_id_2]={}
                            value=0
                            son_list=indicator_3_dict[indicator_id_2]
                            for son in son_list:
                                son_id=son[0]
                                son_weight=son[1]
                                value_son=gui_3_[son_id][region]*son_weight
                                value+=value_son
                            gui_2_value[year][indicator_id_2][region]=value
            gui_2=gui(gui_2_value)
    
            gui_1_value={}
            for year in gui_2:
                gui_1_value[year]={}
                gui_2_=gui_2[year]
                for indicator_id in gui_2_:
                
                    for region in gui_2_[indicator_id]:
                        for indicator_id_1  in indicator_2_dict:
                            if not indicator_id_1 in gui_1_value[year]:
                                gui_1_value[year][indicator_id_1]={}
                            value=0
                            son_list=indicator_2_dict[indicator_id_1]
                            for son in son_list:
                                son_id=son[0]
                                son_weight=son[1]
                                value_son=gui_2_[son_id][region]*son_weight
                                value+=value_son
                            gui_1_value[year][indicator_id_1][region]=value
            #gui_1=gui(gui_1_value)
    
    
            gui_0_value={}
            for year in gui_1_value:
                gui_1_=gui_1_value[year]
                gui_0_value[year]={}
                for indicator_id in gui_1_:
                
                    for region in gui_1_[indicator_id]:
                        for indicator_id_0  in indicator_1_dict:
                            if not indicator_id_0 in gui_0_value[year]:
                                gui_0_value[year][indicator_id_0]={}
                            value=0
                            son_list=indicator_1_dict[indicator_id_0]
                            for son in son_list:
                                son_id=son[0]
                                son_weight=son[1]
                                value_son=gui_1_[son_id][region]*son_weight
                                value+=value_son
                            gui_0_value[year][indicator_id_0][region]=value
            #gui_0=gui(gui_0_value)
    
            db.session.query(mxk_measure).filter(mxk_measure.field==field_v,mxk_measure.scope==scope_v).delete()
            for guix in [gui_3,gui_2,gui_1_value,gui_0_value]:
                result_input(guix,indicator_id2name,field_v,scope_v,org_model,region_code_1)

def result_input(gui_n,indicator_id2name,field,scope,org_model,region_code_1):
    updateTime=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    data_list=[]
    for year in gui_n:
        for indicator_id in gui_n[year]:
            indicator_name=indicator_id2name[indicator_id]
            region_value_list=gui_n[year][indicator_id]
            
            region_value_list=sorted(region_value_list.items(), key=lambda item:item[1],reverse=True)
            for i in range(len(region_value_list)):
                rank=i+1
                region_code= region_value_list[i][0]
                value= region_value_list[i][1]
                value=round(value,2)

                if org_model : 
                    mxk_measure_add=mxk_measure(
                    field=field,
                    scope=scope,
                    year=year,
                    indicator_id=indicator_id,
                    indicator_name=indicator_name,
                    region_code=region_code_1,
                    org_id=region_code,
                    score=value,
                    create_time=updateTime,
                    rank_=rank)
                else:
                    mxk_measure_add=mxk_measure(
                        field=field,
                        scope=scope,
                        year=year,
                        indicator_id=indicator_id,
                        indicator_name=indicator_name,
                        region_code=region_code,
                        score=value,
                        create_time=updateTime,
                        rank_=rank)
                
                data_list.append(mxk_measure_add)
    
    db.session.bulk_save_objects(data_list)

    db.session.commit()
    return 1




        
 