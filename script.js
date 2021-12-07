
// Função Calcular TAXA
    function calculartaxa() {
        var totalContrato = parseFloat(document.getElementById("totalcontrato").value);
        var qtde = parseFloat(document.getElementById("qtde").value);
        var parcela = parseFloat(document.getElementById("parcela").value);
        var taxa = document.getElementById("taxa");
        var contratocomiof = document.getElementById("contratocomiof");
        var error = Math.pow(10, -5);
        var approx = 0.05 / 12; 
        var prev_approx; 
        var k = ""
        
            var iof = ((totalContrato * 0.0411) + totalContrato);
            contratocomiof.value = iof.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
            
           
        function F(x) { return iof * x * Math.pow(1 + x, qtde) / (Math.pow(1 + x, qtde) - 1) - parcela; }
        function F_1(x) { return iof * (Math.pow(1 + x, qtde) / (-1 + Math.pow(1 + x, qtde)) - qtde * x * Math.pow(1 + x, -1 + 2 * qtde) / Math.pow(-1 + Math.pow(1 + x, qtde), 2) + qtde * x * Math.pow(1 + x, -1 + qtde) / (-1 + Math.pow(1 + x, qtde))); }
        for (k = 0; k < 20; ++k) {
             var prev_approx = approx;
             approx = prev_approx - F(prev_approx) / F_1(prev_approx);
             var diff = Math.abs(approx - prev_approx); if (diff < error) break; }
            var rate = approx * 100
        taxa.value = (rate).toFixed(2)
        
        // Definindo a Data Atual:
        var datahj = document.getElementById("datahj");
        var data = new Date();

        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2,'0');
        var ano = data.getFullYear();

        var dataAtual = (dia + "/"+ mes + "/"+ ano) ;
        datahj.value = dataAtual;
        

     // definindo as PARCELAS PAGAS
        
       (function variacaoDias(){
        var dataContrato = new Date(document.getElementById("datact"));
        var datahj1 = new Date(dataAtual)

        var diffInTime = Math.abs(datahj1 - dataContrato)
        var timeInOneDay = 1000 * 60 * 60 * 24
        var diffInDays = diffInTime / timeInOneDay

        var d1 = new Date(dataAtual, "DD/MM/AAAA")
        var d2 = new Date(dataContrato, "DD/MM/AAAA")

        var diff = moment(d2, "DD/MM/YYYY").diff(moment(d1, "DD/MM/YYYY"));

        var meses = moment.duration(diff).asMonths();

        console.log(meses)
        console.log(diffInDays)
        


        }) ()

    
    }



    