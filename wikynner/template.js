function GETRegistros(){
    $.ajax({
        type:'GET', 
        url: 'http://192.168.10.174:9000/aula',        
        headers :{
            
        },			
        success: function(data){
            alert(data.aula)							                                          
        },
        error:function(data){
    
        },
        complete:function(data){
            
        }
    });
}