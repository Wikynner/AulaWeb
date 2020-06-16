          
                $.support.cors = true;

                $(document).ready(function(){
                    $("#corpo").load("cadastro.html");
                    }
                );
            

                $("#botao").click(function(){
                    alert("oi");
                    $("#corpo").load("main.html");
                }
                );

                $("#botao1").click(function(){
                    $("#corpo").load("cadastro.html");
                }
                );

                $("#botao2").click(function(){
                    $("#corpo").load("pesquisa.html");
                }
                );

                $("#botao3").click(function(){
                    $("#corpo").load("contato.html");
                }
                );
                $("#botao4").click(function(){
                    alert("oi")
                    GETRegistros();
                }
                );
                $("#botaoTb").click(function(){
                    $("#corpo").load("tabela.html");
                    GETRegistros()
                }
                );
                function GETRegistros(){
                    $.ajax({
                        type:'GET', 
                        url: 'http://192.168.10.174:9000/alunos',        
                        headers :{
                            
                        },			
                        success: function(data){
                            $.each(data,function(i,itemData)
                            {
                            $("#table").append(
                                '<tr>' +
                                '<th scope="row">1' +itemData.id+'</th>' +
                                '<td>'+itemData.nome+'</td>' +
                                '<td>'+itemData.usuario+'</td>' +
                                '<td>'+itemData.email+'</td>' +
                                '</tr>'

                            )
                            }
                        )
                        },
    
                        error:function(data){
                            console.log(data);
                            
                    
                        },
                        complete:function(data){
                            
                        }
                    });
                }
        