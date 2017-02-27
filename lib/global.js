/**
 * 
 * @authors yutent (yutent@doui.cc)
 * @date    2017-02-27 21:58:03
 *
 */

"use strict";


if(!global.gmdate){
    global.gmdate = function (str, stamp){

        let oDate;
        if(!stamp || arguments.length < 2){
            oDate = new Date()
        }else if(!Date.isDate(stamp)){

            if(!/[^\d]/.test(stamp)){
                stamp = Number(stamp)
            }

            oDate = new Date(stamp);
            if((oDate + '') === 'Invalid Date')
                return 'Invalid Date'
            
        }else{
            oDate = stamp
        }

        return oDate.format(str)

    }
}

if(!global.empty){
    global.empty = function(o){
        if(o === undefined || o === null || o === '' || !o || o === 0){
            return true
        }else if(typeof o === 'object'){
            try{
                return Object.empty(o)
            }catch(e){}
            return false
        }
        return false
    }
}