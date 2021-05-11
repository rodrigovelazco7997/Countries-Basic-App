import axios from "axios";
export const cargarPaises  = "CARGAR_PAISES";
export const paisEspecifico= "PAIS_ESPECIFICO"
export const cargarActividades="CARGAR_ACTIVIDADES"
export const cargarTodosPaises="CARGAR_TODOS_LOS_PAISES"

export const init = (offset,byName,byContinent,byOrder,upOrDown,all) => {
  let paises
  return async (dispatch) => {
    if(all){
      paises=await axios.get(`http://localhost:3001/countries?all=all`)
    }
    else if(byContinent){
      paises=await axios.get(`http://localhost:3001/countries?continent=${byContinent}`)
    }
    else if(byOrder&&upOrDown){
      paises=await axios.get(`http://localhost:3001/countries?byOrder=${byOrder}&upOrDown=${upOrDown}`)
         
    }
    else if(byName){
      paises=await axios.get(`http://localhost:3001/countries?name=${byName}`)
    }
    else if (offset) {
      paises = await axios.get(`http://localhost:3001/countries?offset=${offset}`);
    } else {
      paises = await axios.get(`http://localhost:3001/countries`);
    }
    dispatch(action(paises.data));
  };
};

    export const action = (payload) => ({
      type: cargarPaises,
      payload,
    });

export const onlyOne=(oneCountry)=>{
  return async(dispatch)=>{
    var unique= await axios.get(`http://localhost:3001/countries/${oneCountry}`);
    dispatch(unicoPais(unique.data))
  }
}

    const unicoPais=(payload)=>({
      type:paisEspecifico,
      payload,
    })

export const getActivity=(pais)=>{
  let touristic
  return async(dispatch)=>{
    if(pais){
      touristic=await axios(`http://localhost:3001/activity?name=${pais}`)  
    }else{
      touristic=await axios(`http://localhost:3001/activity`)
    }
    dispatch(act_Turistica(touristic.data))
  }  
}

  const act_Turistica=(payload)=>({
      type:cargarActividades,
      payload
  })

  export const todos=()=>{
    return async(dispatch)=>{
      var allC=await axios.get(`http://localhost:3001/all`)
      dispatch(todosPaises(allC.data))
    }
  }

  const todosPaises=(payload)=>({
    type:cargarTodosPaises,
    payload
  })



  

export const postAct=(activity)=>{
  return async (dispatch)=>{
      await axios({
      method: 'post',
      url: `http://localhost:3001/activity`,
      data: activity
    });
  }
}
