import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

export class Utils{

    public static validateEmail(email:String):boolean {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(email.toLowerCase());
    }

    public static downloadAsExcel(response:any){
      let file = new Blob([response], { type: 'application/vnd.ms-excel' });      
      var fileURL = URL.createObjectURL(file);           
      window.open(fileURL, "_blank");
    }

    public static downloadAsPdf(element:any){
      element = document.getElementById(element) as HTMLCanvasElement;
      html2canvas(element).then(
        (canvas)=>{
          console.log(canvas);
          var imgData = canvas.toDataURL('image/png');
          var doc = new jspdf('p', 'mm', 'a4',true);
          doc.addImage(imgData,50,10,100,100);
          doc.save('chart.pdf');
        }
      )
    }
}
