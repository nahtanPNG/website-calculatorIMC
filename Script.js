
			function calcular(imc){
			
			var nome = document.getElementById('nome').value;
			
			var altura = document.getElementById('altura').value;
			
			var peso = document.getElementById('peso').value;
			
			altura = parseFloat(altura);
			peso = parseFloat(peso);
			

			if(nome == "" || nome == null){
				alert('Favor digitar um número válido para a operação nome');
				return false;
			}
			if(altura == "" || altura == null){
				alert('Favor digitar um número válido para a operação altura');
				return false;
			}
			if(peso == "" || peso == null){
				alert('Favor digitar um número válido para a operação peso');
				return false;
			}
			
	
			var imc = peso / (altura * altura);
			
			if (imc <= 18.5 ){
				document.querySelector('#novo').innerText = "Você está abaixo do peso ideal";
			}else if(imc >18.5 && imc <= 24.9){
				document.querySelector('#novo').innerText = "Parabéns, você está em seu peso ideal" ;
			}else if(imc > 25 && imc <= 29.9){
				document.querySelector('#novo').innerText = "Você está acima de seu peso(sobrepeso)" ;
			}else if(imc > 30 && imc <= 34.9){
				document.querySelector('#novo').innerText = "Você está no nivel de Obesidade Grau 1" ;
			}else if(imc > 35 && imc <= 39.9){
				document.querySelector('#novo').innerText = "Você está no nivel de Obesidade Grau 2" ;
			}else if(imc > 40){
				document.querySelector('#novo').innerText = "Você está no nivel de Obesidade Grau 3" ;
			}
			
			document.getElementById('imc').value = imc;
		
		}
