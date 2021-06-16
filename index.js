class Stack extends Array{
    constructor(...elems){
        super(...elems)
    }
}

$(document).ready(function(){
    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        /* Applying the top margin on modal dialog to align it vertically center */
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);
    
    // Align modal when user resize the window
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });   
});

var str1="",ch=0,c="",k=-1,res=[],f=0,i,str="",a=0,t=0,s=0,prev=0,ab,dis="",degree="";
//normal
$("#ac1").click(function(){
    str1="";
    ch=0;
    c="";
    k=-1;
    $(".inp1").val(str1);    
});
$("#cross1").click(function(){      
    str1=str1.substring(0,str1.length-1);
    $(".inp1").val(str1);
});
$("#percent1").click(function(){
    beforesign(str1);
    str1=str1+"%";
    $(".inp1").val(str1);    
});
$("#divide1").click(function(){
    beforesign(str1);
    str1=str1+"/";
    $(".inp1").val(str1);    
});
$("#71").click(function(){
    str1=str1+"7";
    $(".inp1").val(str1);
});
$("#81").click(function(){
    str1=str1+"8";
    $(".inp1").val(str1);
});
$("#91").click(function(){
    str1=str1+"9";
    $(".inp1").val(str1);
});
$("#multi1").click(function(){
    beforesign(str1);
    str1=str1+"*";
    $(".inp1").val(str1);    
});
$("#41").click(function(){
    str1=str1+"4";
    $(".inp1").val(str1);
});
$("#51").click(function(){
    str1=str1+"5";
    $(".inp1").val(str1);
});
$("#61").click(function(){
    str1=str1+"6";
    $(".inp1").val(str1);
});
$("#sub1").click(function(){
    beforesign(str1);
    str1=str1+"-";
    $(".inp1").val(str1);    
});
$("#11").click(function(){
    str1=str1+"1";
    $(".inp1").val(str1);
});
$("#21").click(function(){
    str1=str1+"2";
    $(".inp1").val(str1);
});
$("#31").click(function(){
    str1=str1+"3";
    $(".inp1").val(str1);
});
$("#add1").click(function(){
    beforesign(str1);
    str1=str1+"+";
    $(".inp1").val(str1);    
});
$("#01").click(function(){
    str1=str1+"0";
    $(".inp1").val(str1);
});
$("#001").click(function(){
    str1=str1+"00";
    $(".inp1").val(str1);
});
$("#decimal1").click(function(){
    beforesign(str1);
    str1=str1+".";
    $(".inp1").val(str1);
});
$("#equal1").click(function(){
    str1=result(str1);
    if(str1==="NaN" || str1==="")
    str1="Error";
    $(".inp1").val(str1);    
    res=[];    
});
//scientific
$("#pi").click(function(){     
    str=str+"p";
    dis=dis+"p";
    $(".inp").val(str);    
});
$("#e").click(function(){    
    str=str+"e";
    dis=dis+"e";
    $(".inp").val(str);    
});
$("#deg").click(function(){
    degree=$("#deg").html();    
    if(degree==="deg")
    $("#deg").html("rad");
    else  
    $("#deg").html("deg"); 
});
$("#sin").click(function(){
    str=str+"sin(";
    dis=dis+"s(";
    $(".inp").val(str);    
});
$("#cos").click(function(){
    str=str+"cos(";
    dis=dis+"c(";
    $(".inp").val(str);    
});
$("#tan").click(function(){
    str=str+"tan(";
    dis=dis+"t(";
    $(".inp").val(str);    
});
$(".close").click(function(){    
    str="";
    dis="";
    ch=0;
    c="";
    k=-1;
    $(".inp").val(str);    
});
$("#power").click(function(){
    before();    
    str=str+"^";
    dis=dis+"^";
    dis=bracket(dis);
    $(".inp").val(str);    
});
$("#fact").click(function(){
    before();    
    str=str+"!";
    dis=dis+"!";
    dis=bracket(dis);
    $(".inp").val(str);    
});
$("#revpower").click(function(){   
    before();  
    str=str+"^(-1)";
    dis=dis+"^(0-1)";
    dis=bracket(dis);
    $(".inp").val(str);    
});
$("#sqrt").click(function(){/////////
    before();   
    str=str+"^0.5";
    dis=dis+"^0.5";
    dis=bracket(dis);
    $(".inp").val(str);    
});
$("#open").click(function(){
    str=str+"(";
    dis=dis+"(";
    $(".inp").val(str);    
});
$("#close").click(function(){
    str=str+")";
    dis=dis+")";
    $(".inp").val(str);    
});
$("#ln").click(function(){    
    str=str+"ln(";
    dis=dis+"L(";    
    $(".inp").val(str);    
});
$("#lg").click(function(){    
    str=str+"lg(";
    dis=dis+"l(";
    $(".inp").val(str);    
});
$("#ac").click(function(){
    str="";
    dis="";
    ch=0;
    c="";
    k=-1;
    $(".inp").val(str);    
});
$("#cross").click(function(){      
    str=str.substring(0,str.length-1);
    dis=dis.substring(0,dis.length-1);
    $(".inp").val(str);
});
$("#percent").click(function(){
    before();
    str=str+"%";
    dis=dis+"%";
    dis=bracket(dis);
    $(".inp").val(str);    
});
$("#divide").click(function(){
    before();
    str=str+"/";
    dis=dis+"/";
    dis=bracket(dis);
    $(".inp").val(str);    
});
$("#7").click(function(){
    str=str+"7";
    dis=dis+"7";
    $(".inp").val(str);
});
$("#8").click(function(){
    str=str+"8";
    dis=dis+"8";
    $(".inp").val(str);
});
$("#9").click(function(){
    str=str+"9";
    dis=dis+"9";
    $(".inp").val(str);
});
$("#multi").click(function(){
    before(); 
    str=str+"*";
    dis=dis+"*";
    dis=bracket(dis);
    $(".inp").val(str);    
});
$("#4").click(function(){
    str=str+"4";
    dis=dis+"4";
    $(".inp").val(str);
});
$("#5").click(function(){
    str=str+"5";
    dis=dis+"5";
    $(".inp").val(str);
});
$("#6").click(function(){
    str=str+"6";
    dis=dis+"6";
    $(".inp").val(str);
});
$("#sub").click(function(){
    before();
    str=str+"-";
    dis=dis+"-";
    dis=bracket(dis);
    $(".inp").val(str);    
});
$("#1").click(function(){
    str=str+"1";
    dis=dis+"1";
    $(".inp").val(str);
});
$("#2").click(function(){
    str=str+"2";
    dis=dis+"2";
    $(".inp").val(str);
});
$("#3").click(function(){
    str=str+"3";
    dis=dis+"3";
    $(".inp").val(str);
});
$("#add").click(function(){
    before();
    str=str+"+";
    dis=dis+"+";
    dis=bracket(dis);
    $(".inp").val(str);    
});
$("#0").click(function(){
    str=str+"0";
    dis=dis+"0";
    $(".inp").val(str);
});
$("#00").click(function(){
    str=str+"00";
    dis=dis+"00";
    $(".inp").val(str);
});
$("#decimal").click(function(){
    before();
    str=str+".";
    dis=dis+".";
    $(".inp").val(str);
});
$("#equal").click(function(){
    dis=result(dis);
    str=dis;
    if(str==="NaN" || str==="")
    str="Error";
    $(".inp").val(str);    
    res=[];    
});

//FUNCTIONSSSSS
function before()//to add zero if expression starts from a sign for scientific
{
    if(str==="")//,c,t,l,L,(,
    {
        dis="0";
        console.log(str);
    }
}
function beforesign(strr)//to add zero if expression starts from a sign for normal
{
    if(strr==="")
        strr="0";
}
function bracket(di)//converting(-1)
{
    ab="";
    ab=di.substr(di.length-2,di.length);  
    if(ab==="(/")
    {
        ab="0/";
        di=di.substr(0,di.length-1)+ab;
    }
    else if(ab==="(*")
    {
        ab="0*";
        di=di.substr(0,di.length-1)+ab;
    }
    else if(ab==="(%")
    {
        ab="0%";
        di=di.substr(0,di.length-1)+ab;
    }
    else if(ab==="(+")
    {
        ab="0+";
        di=di.substr(0,di.length-1)+ab;
    }
    else if(ab==="(-")
    {
        ab="0-";
        di=di.substr(0,di.length-1)+ab;        
    }
    else if(ab==="(!")
    {
        ab="0!";
        di=di.substr(0,di.length-1)+ab;
    }
    else if(ab==="(^")
    {
        ab="0^";
        di=di.substr(0,di.length-1)+ab;
    }   
    return di; 
}

//main function
function result(st)  //infix to postfix
{ 
try
{
c="";
f=k=ch=0;
res=[];
if(st.charAt(0)==='-')
st="0"+st;
res=st.split('');
var stack1=new Stack();//numbers
var stack2=new Stack();//operators
var stack3=new Stack();//priority
var current;
console.log(res);
for(i=0;i<res.length;i++)
{
current=res[i];
if(current!=='/' && current!=='*' && current!=='%' && current!=='+' && current!=='-' && current!=='!' && current!=='^' && current!=='(' && current!==')' && current!=='L' && current!=='l' && current!=='s' && current!=='c' && current!=='t' && current!=='e' && current!=='p')
c=c+""+current;
else
{
    if(c!=="")
    {
        stack1.push(Number(c));
        c="";
    }
    if(current==='e')
    {
        if(!isNaN(res[i-1]) || !isNaN(res[i+1]))
            return "Error";
        else
            c=Math.E;
    }
    else if(current==='p')
    {
        if(!isNaN(res[i-1]) || !isNaN(res[i+1]))
            return "Error";
        else
            c=Math.PI;
    }
    else if(current==='L' || current==='l' || current==='s' || current==='c' || current==='t')
    {
        if(!isNaN(res[i-1]))
        {
          s='*';
          ch=3;
          c=stack3.pop();
          if(c=="")
          {
              stack2.push(s);
              stack3.push(ch);
          }
          else 
          {
              if(ch<c)
              {
                  stack2.push(s);
                  stack3.push(c);
                  stack3.push(ch);
                  k++;
              }
              else
              {
                  t=0;
                  while(ch>=c)
                  {
                      c=stack2.pop();
                      stack1.push(c);
                      k--;
                      c=stack3.pop();
                      if(c=="")
                      { 
                          t=1;
                          c=ch+1;
                      }
                  } 
                  if(t===0)
                    stack3.push(c);
                  stack2.push(s);
                  stack3.push(ch);
                  k++;
              }              
          }      
      }  
        stack3.push(11);
        stack2.push(current);                       
        c="";
    }
    else if(current==='(' )
     { 
      if(!isNaN(res[i-1]))
      {
          s='*';
          ch=3;
          c=stack3.pop();
          if(c=="")
          {
              stack2.push(s);
              stack3.push(ch);
          }
          else 
          {
              if(ch<c)
              {
                  stack2.push(s);
                  stack3.push(c);
                  stack3.push(ch);
                  k++;
              }
              else
              {
                  t=0;
                  while(ch>=c)
                  {
                      c=stack2.pop();
                      stack1.push(c);
                      k--;
                      c=stack3.pop();
                      if(c=="")
                      { 
                          t=1;
                          c=ch+1;
                      }
                  } 
                  if(t===0)
                    stack3.push(c);
                  stack2.push(s);
                  stack3.push(ch);
                  k++;
              }         
          }      
      }  
    stack3.push(10);
    stack2.push(current);                         
    c="";
  }
  else if(current===')')
    {
        c=stack2.pop();
         while(c!=='(')
            {
                k--;
                stack1.push(c);
                c=stack3.pop();
                c=stack2.pop();
            }
            c=stack3.pop();
            c=stack2.pop();
            if(c==='L' || c==='l' || c==='s' || c==='c' || c==='t' )
            {
                stack1.push(c);
                c=stack3.pop();
            }
            else
            stack2.push(c);
           s=stack3.pop();
           c="";
           if(!isNaN(res[i+1]))
           {
            s='*';
            ch=3;
            c=stack3.pop();
            if(c=="")
            {
                stack2.push(s);
                stack3.push(ch);
            }
            else 
            {
                if(ch<c)
                {
                    stack2.push(s);
                    stack3.push(c);
                    stack3.push(ch);
                    k++;
                }
                else
                {
                    t=0;
                    while(ch>=c)
                    {
                        c=stack2.pop();
                        stack1.push(c);
                        k--;
                        c=stack3.pop();
                        if(c=="")
                        { 
                            t=1;
                            c=ch+1;
                        }
                    } 
                    if(t===0)
                    stack3.push(c);
                    stack2.push(s);
                    stack3.push(ch);
                    k++;
                }       
            }      
        }  
       c="";    
    }
    else if(current==='!')
        {
         c=stack1.pop();
         f=1;
         for(j=c;j>=1;j--)
         f=f*j;
         c=f;
         stack1.push(Number(c));
         c="";
         if(!isNaN(res[i+1]))
         {
             res[i]="*";
             i--;
         } 
        }     
    else if(k===0)//adding first operator to stack
      {        
        stack2.push(current); 
        k++;
        t=0;
        if(current==='^')
        {
          stack3.push(2);
          t=1;
        }
        if(current==='/'||current==='*')
            stack3.push(3);
        else if(current==='%')
            stack3.push(4);
        else if(current==='+'||current==='-')
            stack3.push(5);        
    }   
    else// if stack already has some operators then adding operators
    {
        t=0;
        if(current==='^')
        {
            ch=2;
            t=1;
        }
        if(current==='/'||current==='*')
        ch=3;
        else if(current==='%')
        ch=4;
        else if(current==='+'||current==='-')
        ch=5;
        c=stack3.pop();
        if(ch<c)
        {
          stack2.push(current);
          stack3.push(c);
          stack3.push(ch);
          k++;
        }
        else
        {
        s=0;
        while(ch>=c)
        {
          c=stack2.pop();
          stack1.push(c);
          k--;
          c=stack3.pop();
          if(c=="")
          { 
              s=1;
              c=ch+1;
          }
        } 
         if(s===0)
         stack3.push(c);
         stack2.push(current);
         stack3.push(ch);
         k++;
    }
    c="";
}//adding operator to stack ELSE end
}//main else ends
}//for end
if(c!=="")
stack1.push(Number(c));
while(k!==0)
{
    current=stack2.pop();    
    stack1.push(current);
    k--;
}
console.log(stack1);
return evaluate(stack1);
}//try end
catch(error)
    {
        alert("Error");
    }
}//main function end

function evaluate(st)//evaluations
{
    try
    {
    var a,b;
    var st1=new Stack();//numbers
    for(i=0;i<st.length;i++)
    {
    c=st[i]; 
    console.log(st1);   
    if(c==undefined)
     return st1;
    else if(!isNaN(c))
     st1.push(Number(c));
    else
    {
     b=st1.pop();
     a=st1.pop();
     switch(c)
     {
         case '+':
            st1.push(a+b);
            break;
         case '-':
            st1.push(a-b); 
            break;
         case '*':
            st1.push(a*b);
            break;
         case '/':
             if(b===0)
             return "Can't divide by zero";
             st1.push(Number((a/b).toFixed(4)));
             break;
         case '%':
             if(a===undefined)
             {
                 st1.push(Number((b/100).toFixed(4)));
                console.log(b/100);
             }
             else
             {
                 st1.push(a);
                 st1.push(Number((b*a/100).toFixed(4)));
                 console.log(st1);
             }
            break;
         case '^':
            f=Math.pow(a,b); 
            f=Number(f.toFixed(4));    
            st1.push(f);     
            break;
         case 'L':
             if(a!==undefined)
                st1.push(a);                
             b=Math.log(b);
             b=Number(b.toFixed(4));
             st1.push(b);
             break;
        case 'l':
            if(a!==undefined)
                st1.push(a);                
            b=Math.log10(b);
            b=Number(b.toFixed(4));
            st1.push(b);
            break;
        case 's':
            if(a!==undefined)
                st1.push(a);
            degree=$("#deg").html(); 
            if(degree==="rad")               
                b=(Math.sin(b)).toFixed(4);
            else
                b=(Math.sin(b*Math.PI/180)).toFixed(4);
                b=Number(b);
                if(b==-0)
                b=0;                
            st1.push(b);
            break;
        case 'c':
            if(a!==undefined)
               st1.push(a);                
            degree=$("#deg").html(); 
            if(degree==="rad")               
                b=(Math.cos(b)).toFixed(4);
            else
            {                                
                b=b*Math.PI/180;
                b=b.toFixed(4);                                
                b=(Math.cos(b)).toFixed(4);                           
            }
            b=Number(b);
            if(b==-0)
            b=0;
            st1.push(b);
            break;
        case 't':
            if(a!==undefined)
                st1.push(a);                
            degree=$("#deg").html(); 
            if(degree==="rad")               
                b=(Math.tan(b)).toFixed(4);
            else       
             {
                b=Math.tan(b * Math.PI / 180);
                b=b.toFixed(4);
             } 
             b=Number(b);
             if(b==-0)
             b=0;                      
           st1.push(b);
            break;
        }
    }
}
console.log(st1);
return st1;
    }
    catch(error)
    {
        alert("Error");
    }
}

var act=1,st1="",st2="",v1,v2,ans="";
//life
//numberpalette bmi
$("#crossb").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#7b").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#8b").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#9b").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#4b").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#5b").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#6b").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#1b").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#2b").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#3b").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#0b").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#w").val(st1);
    $("#h").val(st2);
});
$("#decimalb").click(function(){
    if(act===1)
    st1=st1+".";
    else
    st2=st2+".";
    $("#w").val(st1);
    $("#h").val(st2);    
});
//bmi
$("#bmi").click(function(){
    st1=st2="";
    $("#w").val(st1);
    $("#h").val(st2);
    v1=1;
    v2=2;
});
$("#kg").click(function(){
    $("#spwt").html("kilograms ");  
    act=1;  
    v1=1;
});
$("#pound").click(function(){
    $("#spwt").html("pounds ");   
    act=1; 
    v1=2;
});
$("#cm").click(function(){
    $("#spht").html("centimeters ");    
    act=2;
    v2=1;
});
$("#m").click(function(){
    $("#spht").html("meters ");  
    act=2;
    v2=2;  
});
$("#ft").click(function(){
    $("#spht").html("feet ");  
    act=2;  
    v2=3;
});
$("#inch").click(function(){
    $("#spht").html("inches ");   
    act=2; 
    v2=4;
});
$("#w").click(function(){   
    act=1; 
});
$("#h").click(function(){ 
    act=2; 
});
$("#returnb").click(function(){ 
    st1=st2="";
    $("#w").val(st1);
    $("#h").val(st2);
    $("#spwt").html("kilograms "); 
    $("#spht").html("meters "); 
    $("#bmicard").addClass('collapse');
    $("#numpalette").removeClass('collapse');
});
$("#acb").click(function(){
    st1=st2="";
    $("#w").val(st1);
    $("#h").val(st2);
    $("#spwt").html("kilograms "); 
    $("#spht").html("meters "); 
});
$("#gob").click(function(){
if(v1===2)
v1=0.453592*st1;
else
v1=st1;
if(v2===1)
v2=st2/100;
else if(v2===2)
v2=st2;
else if(v2===3)
v2=0.3048*st2;
else 
v2=0.0254*st2;
v1=v1/(v2*v2);
v1=v1.toFixed(2);
if(v1<0)
v1=0.0; 
$("#bmiresult").html(v1); 
if(v1<=18.5)
{
$("#bmirange").html("Underweight");  
$("#bmirange").css("color","blue");
$("#resprogress").removeClass('bg-warning');
$("#resprogress").addClass('bg-info');
$("#resprogress").css('width','25%');
} 
else if( v1<=25.0)
{
$("#bmirange").html("Normal");
$("#bmirange").css("color","green");
$("#resprogress").removeClass('bg-warning');
$("#resprogress").addClass('bg-success');
$("#resprogress").css('width','50%');
} 
else
{
$("#bmirange").html("Overweight");  
$("#bmirange").css("color","red");
$("#resprogress").removeClass('bg-warning');  
$("#resprogress").addClass('bg-danger');
$("#resprogress").css('width','75%');
}
$("#bmicard").removeClass('collapse');
$("#numpalette").addClass('collapse');
if(v1<16.0)
$("#resprogress").css('width','5%');
else if(v1>40)
$("#resprogress").css('width','100%');
});

//discount
//numberpalette discount
$("#crossd").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#7d").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#8d").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#9d").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#4d").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#5d").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#6d").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#1d").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#2d").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#3d").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#0d").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#op").val(st1);
    $("#dp").val(st2);
});
$("#decimald").click(function(){
    if(act===1)
    st1=st1+".";
    else
    st2=st2+".";
    $("#op").val(st1);
    $("#dp").val(st2);    
});
$("#op").click(function(){   
    act=1; 
});
$("#dp").click(function(){ 
    act=2; 
});
$("#disc").click(function(){
    st1=st2="";
    act=1;
    $("#op").val(st1);
    $("#dp").val(st2);
    $("#fp").html(st2);
    $("#saved").addClass('collapse');
});
$("#acd").click(function(){
    st1=st2="";
    act=1;
    $("#op").val(st1);
    $("#dp").val(st2);
    $("#fp").html(st2);
    $("#saved").addClass('collapse');
});
$("#god").click(function(){
    st2=st1*st2/100;
    $("#save").html(st2.toFixed(2));
    st2=st1-st2;
    $("#fp").html(st2.toFixed(2));
    $("#saved").removeClass('collapse');
});

//percentage
//numberpalette percentage
$("#crossp").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#7p").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#8p").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#9p").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#4p").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#5p").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#6p").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#1p").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#2p").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#3p").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#0p").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#pv").val(st1);
    $("#tot").val(st2);
});
$("#decimalp").click(function(){
    if(act===1)
    st1=st1+".";
    else
    st2=st2+".";
    $("#pv").val(st1);
    $("#tot").val(st2);
    
});
$("#pv").click(function(){   
    act=1; 
});
$("#tot").click(function(){ 
    act=2; 
});
$("#per").click(function(){
    st1=st2="";
    act=1;
    $("#pv").val(st1);
    $("#tot").val(st2);
    $("#pres").html(st2);   
});
$("#acp").click(function(){
    st1=st2="";
    act=1;
    $("#pv").val(st1);
    $("#tot").val(st2);
    $("#pres").html(st2);
});
$("#gop").click(function(){
    st2=st1*st2/100;
    $("#pres").html(st2.toFixed(2));
});

//numberpalette length
var act1f=0,act2f=0;
$(".crossl").click(function(){ 
    if(act===1)  
    {
        if(act1f===0)
        st1=st1.substring(0,st1.length-1);
        else 
        st3=st3.substring(0,st3.length-1);
    }    
    else
    {
        if(act2f===0)
        st2=st2.substring(0,st2.length-1);
        else 
        st4=st4.substring(0,st4.length-1);
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".7").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+"7";
        else 
        st3=st3+"7";
    }    
    else
    {
        if(act2f===0)
        st2=st2+"7";
        else 
        st4=st4+"7"; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".8").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+"8";
        else 
        st3=st3+"8";
    }    
    else
    {
        if(act2f===0)
        st2=st2+"8";
        else 
        st4=st4+"8"; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".9").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+"9";
        else 
        st3=st3+"9";
    }    
    else
    {
        if(act2f===0)
        st2=st2+"9";
        else 
        st4=st4+"9"; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".4").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+"4";
        else 
        st3=st3+"4";
    }    
    else
    {
        if(act2f===0)
        st2=st2+"4";
        else 
        st4=st4+"4"; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".5").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+"5";
        else 
        st3=st3+"5";
    }    
    else
    {
        if(act2f===0)
        st2=st2+"5";
        else 
        st4=st4+"5"; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".6").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+"6";
        else 
        st3=st3+"6";
    }    
    else
    {
        if(act2f===0)
        st2=st2+"6";
        else 
        st4=st4+"6"; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".1").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+"1";
        else 
        st3=st3+"1";
    }    
    else
    {
        if(act2f===0)
        st2=st2+"1";
        else 
        st4=st4+"1"; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".2").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+"2";
        else 
        st3=st3+"2";
    }    
    else
    {
        if(act2f===0)
        st2=st2+"2";
        else 
        st4=st4+"2"; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".3").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+"3";
        else 
        st3=st3+"3";
    }    
    else
    {
        if(act2f===0)
        st2=st2+"3";
        else 
        st4=st4+"3"; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".0").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+"0";
        else 
        st3=st3+"0";
    }    
    else
    {
        if(act2f===0)
        st2=st2+"0";
        else 
        st4=st4+"0"; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
$(".decimall").click(function(){
    if(act===1)  
    {
        if(act1f===0)
        st1=st1+".";
        else 
        st3=st3+".";
    }    
    else
    {
        if(act2f===0)
        st2=st2+".";
        else 
        st4=st4+"."; 
    } 
$("#l1").val(st1);
$("#l2").val(st2);
$("#l3").val(st3);
$("#l4").val(st4);
});
//length
var st3,st4;
$("#length").click(function(){
    st1=st2="";
    st3=st4="";
    act1f=ac2f=0;
    $("#l1").val(st1);
    $("#l2").val(st2);
    $("#l3").val(st3);
    $("#l4").val(st4);
    $("#spl1").html("Meter "); 
    $("#spl2").html("Centimeter "); 
    $("#spfirst").html("m "); 
    $("#spsecond").html("cm "); 
    $(".footinch1").addClass("collapse");
    $(".footinch2").addClass("collapse");
    
    v1=2;
    v2=4;
});
$(".km1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Kilometer ");  
        $("#spfirst").html("km "); 
        v1=1;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Kilometer "); 
        $("#spsecond").html("km "); 
        v2=1;
        act2f=0;
    }
});
$(".meter1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Meter  ");  
        $("#spfirst").html("m "); 
        v1=2;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Meter "); 
        $("#spsecond").html("m "); 
        v2=2;
        act2f=0;
    }
});
$(".dm1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Decimeter ");  
        $("#spfirst").html("dm ");
        v1=3;
        act1f=0; 
    }
    else
    {
        $("#spl2").html("Decimeter "); 
        $("#spsecond").html("dm "); 
        v2=3;
        act2f=0;
    }
});
$(".cm1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Centimeter ");  
        $("#spfirst").html("cm "); 
        v1=4;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Centimeter "); 
        $("#spsecond").html("cm "); 
        v2=4;
        act2f=0;
    }
});
$(".mm1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Millimeter ");  
        $("#spfirst").html("mm "); 
        v1=5;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Millimeter "); 
        $("#spsecond").html("mm "); 
        v2=5;
        act2f=0;
    }
});
$(".um1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Micrometer ");  
        $("#spfirst").html("<span>&micro;</span>m ");   
        v1=6;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Micrometer "); 
        $("#spsecond").html("<span>&micro;</span>m ");   
        v2=6;
        act2f=0;
    }
});
$(".nm1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Nanometer ");  
        $("#spfirst").html("nm "); 
        v1=7;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Nanometer "); 
        $("#spsecond").html("nm "); 
        v2=7;
        act2f=0;
    }
});
$(".pm1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Picometer ");  
        $("#spfirst").html("pm "); 
        v1=8;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Picometer "); 
        $("#spsecond").html("pm ");
        v2=8; 
        act2f=0;
    }
});
$(".nmi1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Nautical mile ");  
        $("#spfirst").html("nmi ");
        v1=9;
        act1f=0; 
    }
    else
    {
        $("#spl2").html("Nautical mile "); 
        $("#spsecond").html("nmi "); 
        v2=9;
        act2f=0;
    }
});
$(".mile1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Mile ");  
        $("#spfirst").html("mile "); 
        v1=10;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Mile "); 
        $("#spsecond").html("mile "); 
        v2=10;
        act2f=0;
    }
});
$(".fur1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Femara ");  
        $("#spfirst").html("fur "); 
        v1=11;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Femara "); 
        $("#spsecond").html("fur "); 
        v2=11;
        act2f=0;
    }
});
$(".ftm1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Fathom ");  
        $("#spfirst").html("ftm "); 
        v1=12;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Fathom "); 
        $("#spsecond").html("ftm "); 
        v2=12;
        act2f=0;
    }
});
$(".yd1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Yard ");  
        $("#spfirst").html("yd "); 
        v1=13;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Yard "); 
        $("#spsecond").html("yd "); 
        v2=13;
        act2f=0;
    }
});
$(".foot1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Foot ");  
        $("#spfirst").html("foot "); 
        v1=14;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Foot "); 
        $("#spsecond").html("foot "); 
        v2=14;
        act2f=0;
    }
});
$(".in1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Inch ");  
        $("#spfirst").html("in "); 
        v1=15;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Inch "); 
        $("#spsecond").html("in "); 
        v2=15;
        act2f=0;
    }
});
$(".ftin1").click(function(){     
    if(act===1)
    {
        $(".footinch1").removeClass("collapse");
        $("#spl1").html("Inch ");  
        $("#spfirst").html("ft in "); 
        v1=16;
        act1f=1;
    }
    else
    {
        $(".footinch2").removeClass("collapse");
        $("#spl2").html("Inch ");
        $("#spsecond").html("ft in "); 
        v2=16;
        act2f=1;
    }
});
$(".pc1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Parsec ");  
        $("#spfirst").html("pc "); 
        v1=17;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Parsec "); 
        $("#spsecond").html("pc "); 
        v2=17;
        act2f=0;
    }
});
$(".ld1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Lunar distance ");  
        $("#spfirst").html("ld "); 
        v1=18;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Lunar distance "); 
        $("#spsecond").html("ld "); 
        v2=18;
        act2f=0;
    }
});
$(".ast1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Astronomical unit ");  
        $("#spfirst").html("ast "); 
        v1=19;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Astronomical unit "); 
        $("#spsecond").html("ast "); 
        v2=19;
        act2f=0;
    }
});
$(".ly1").click(function(){
    if(act===1)
    {
        $("#spl1").html("Light year ");  
        $("#spfirst").html("ly "); 
        v1=20;
        act1f=0;
    }
    else
    {
        $("#spl2").html("Light year "); 
        $("#spsecond").html("ly "); 
        v2=20;
        act2f=0;
    }
});
$("#first").click(function(){   
    act=1;            
});
$("#second").click(function(){ 
    act=2;          
});
$("#l1").click(function(){   
    act=1;
   act1f=0;    
});
$("#l2").click(function(){ 
    act=2;
    act2f=0;    
});
$("#l3").click(function(){   
    act=1;
    act1f=1;    
});
$("#l4").click(function(){ 
    act=2;
    act2f=1;    
});
$(".acl").click(function(){    
    st2=st1=""; 
    st3=st4="";
    $("#l1").val(st1);
    $("#l2").val(st2); 
    $("#l3").val(st3);
    $("#l4").val(st4);
    $("#spl1").html("Meter "); 
    $("#spl2").html("Centimeter "); 
    $("#spfirst").html("m "); 
    $("#spsecond").html("cm "); 
    $(".footinch1").addClass("collapse");
    $(".footinch2").addClass("collapse");    
    v2=4;
    v1=2;
});
$(".gol").click(function(){ /////////////
    var x,m;
if(act===1)
{    
    if(v1!==16)
    {
        ans=calculatel1(st1,v1);
        console.log(ans);
        if(v2!==16)
        {
            ans=calculatel2(ans,v2);
            m=ans;
            ans=ans.toString();
            if(ans.length>8)
                $("#l2").val(m.toExponential(3));           
            else
            $("#l2").val(m.toFixed(4));
        }
        else
        {
            x=calculatel2(ans,15);
            console.log(x);
            m=x%12;
            x=x/12;
            x=parseInt(x);
            x=x.toString();
            if(x.length>8)
            $("#l4").val(parseInt(x).toExponential(3));
            else
            $("#l4").val(parseInt(x));                      
            $("#l2").val(m.toFixed(2));            
        }
    }
    else
    {
        ans=calculatel1(st3,14);
        ans=ans+calculatel1(st1,15);
        if(v2!==16)
        {
            ans=calculatel2(ans,v2);
            m=ans;
            ans=ans.toString();
            if(ans.length>8)
                $("#l2").val(m.toExponential(3));                     
            else
            $("#l2").val(m.toFixed(4));
        }
        else
        {            
            $("#l4").val(st3);            
            $("#l2").val(st1);
        }
    }
}
else//act=2
{
    if(v2!==16)
    {
        ans=calculatel1(st2,v2);
        if(v1!==16)
        {
        ans=calculatel2(ans,v1);
        m=ans;
        ans=ans.toString();
        if(ans.length>8)
            $("#l1").val(m.toExponential(3));
        else
        $("#l1").val(m.toFixed(4));
        }    
        else
        {
            x=calculatel2(ans,15);
            m=x%12;
            x=x/12;
            x=parseInt(x);
            x=x.toString();
            if(x.length>8)
            $("#l3").val(parseInt(x).toExponential(3));
            else
            $("#l3").val(parseInt(x));                      
            $("#l1").val(m.toFixed(2));  
        }
    }
    else
    {
        ans=calculatel1(st4,14);
        ans=ans+calculatel1(st2,15);
        if(v1!==16)
        {
            ans=calculatel2(ans,v1); 
            m=ans;
            ans=ans.toString();
            if(ans.length>8)
                $("#l1").val(m.toExponential(3));
            else
            $("#l1").val(m.toFixed(4));           
        }
        else
        {           
            $("#l3").val(st4);             
            $("#l1").val(st2);
        }
    }
}
});
function calculatel1(st,v)//unit to centimeter for length
{
    if(v===1)
    return (st*100000);
    else if(v===2)
    return st*100;
    else if(v===3)
    return st*10;
    else if(v===4)
    return st*1;
    else if(v===5)
    return st*0.1;
    else if(v===6)
    return st*0.0001;
    else if(v===7)
    return st*(1e-7);
    else if(v===8)
    return st*(1e-10);
    else if(v===9)
    return st*185200;
    else if(v===10)
    return st*160934.4;
    else if(v===11)
    return st*20116.8;
    else if(v===12)
    return st*182.88;
    else if(v===13)
    return st*91.44;
    else if(v===14)
    return st*30.48;
    else if(v===15)
    return st*2.54;
    else if(v===17)
    return st*(3.08567758e18);
    else if(v===18)
    return st*(3.84401e10);
    else if(v===19)
    return st*(1.49597871e13);
    else if(v===20)
    return st*(9.46073047e17);
}
function calculatel2(st,v)//centimeter to unit for length
{
    if(v===1)
    return (st/100000);
    else if(v===2)
    return st/100;
    else if(v===3)
    return st/10;
    else if(v===4)
    return st/1;
    else if(v===5)
    return st/0.1;
    else if(v===6)
    return st/0.0001;
    else if(v===7)
    return st/(1e-7);
    else if(v===8)
    return st/(1e-10);
    else if(v===9)
    return st/185200;
    else if(v===10)
    return st/160934.4;
    else if(v===11)
    return st/20116.8;
    else if(v===12)
    return st/182.88;
    else if(v===13)
    return st/91.44;
    else if(v===14)
    return st/30.48;
    else if(v===15)
    return st/2.54;
    else if(v===17)
    return st/(3.08567758e18);
    else if(v===18)
    return st/(3.84401e10);
    else if(v===19)
    return st/(1.49597871e13);
    else if(v===20)
    return st/(9.46073047e17);
}

//numberpalette area
$(".crossa").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".7a").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".8a").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".9a").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".4a").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".5a").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".6a").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".1a").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".2a").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".3a").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".0a").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
});
$(".decimala").click(function(){
    if(act===1)
    st1=st1+".";
    else
    st2=st2+".";
    $("#ar1").val(st1);
    $("#ar2").val(st2);    
});
//area
$("#area").click(function(){
    st1=st2="";
    $("#ar1").val(st1);
    $("#ar2").val(st2);
    $("#arsp1").html("Square meter "); 
    $("#arsp2").html("Square centimeter "); 
    $("#arspfirst").html("m<span>&#178;</span> "); 
    $("#arspsecond").html("cm<span>&#178;</span> "); 
    v1=4;
    v2=6;
});
$(".km2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square kilometer ");  
        $("#arspfirst").html("km<span>&#178;</span> "); 
        v1=1;
    }
    else
    {
        $("#arsp2").html("Square kilometer "); 
        $("#arspsecond").html("km<span>&#178;</span> "); 
        v2=1;
    }
});
$(".hect2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Hectare ");  
        $("#arspfirst").html("ha "); 
        v1=2;
    }
    else
    {
        $("#arsp2").html("Hectare "); 
        $("#arspsecond").html("ha "); 
        v2=2;
    }
});
$(".ar2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Are ");  
        $("#arspfirst").html("a "); 
        v1=3;
    }
    else
    {
        $("#arsp2").html("Are "); 
        $("#arspsecond").html("a "); 
        v2=3;
    }
});
$(".msq2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square meter ");  
        $("#arspfirst").html("m<span>&#178;</span> "); 
        v1=4;
    }
    else
    {
        $("#arsp2").html("Square meter "); 
        $("#arspsecond").html("m<span>&#178;</span> "); 
        v2=4;
    }
});
$(".dm2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square decimeter ");  
        $("#arspfirst").html("dm<span>&#178;</span> ");
        v1=5; 
    }
    else
    {
        $("#arsp2").html("Square decimeter "); 
        $("#arspsecond").html("dm<span>&#178;</span> "); 
        v2=5;
    }
});
$(".cm2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square centimeter ");  
        $("#arspfirst").html("cm<span>&#178;</span> "); 
        v1=6;
    }
    else
    {
        $("#arsp2").html("Sqaure centimeter "); 
        $("#arspsecond").html("cm<span>&#178;</span> "); 
        v2=6;
    }
});
$(".mm2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square millimeter ");  
        $("#arspfirst").html("mm<span>&#178;</span> "); 
        v1=7;
    }
    else
    {
        $("#arsp2").html("Square millimeter "); 
        $("#arspsecond").html("mm<span>&#178;</span> "); 
        v2=7;
    }
});
$(".um2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square micron ");  
        $("#arspfirst").html("<span>&micro;</span>m<span>&#178;</span> "); 
        v1=8;
    }
    else
    {
        $("#arsp2").html("Square micronmeter "); 
        $("#arspsecond").html("<span>&micro;</span>m<span>&#178;</span> "); 
        v2=8;
    }
});
$(".acre2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Acre ");  
        $("#arspfirst").html("ac "); 
        v1=9;
    }
    else
    {
        $("#arsp2").html("Acre "); 
        $("#arspsecond").html("ac ");
        v2=9; 
    }
});
$(".mile2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square mile ");  
        $("#arspfirst").html("mile<span>&#178;</span> "); 
        v1=10;
    }
    else
    {
        $("#arsp2").html("Square mile "); 
        $("#arspsecond").html("mile<span>&#178;</span> "); 
        v2=10;
    }
});
$(".yd2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square yard ");  
        $("#arspfirst").html("yd<span>&#178;</span> "); 
        v1=11;
    }
    else
    {
        $("#arsp2").html("Square yard "); 
        $("#arspsecond").html("yd<span>&#178;</span> "); 
        v2=11;
    }
});
$(".foot2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square foot ");  
        $("#arspfirst").html("foot<span>&#178;</span> "); 
        v1=12;
    }
    else
    {
        $("#arsp2").html("Square foot "); 
        $("#arspsecond").html("foot<span>&#178;</span> "); 
        v2=12;
    }
});
$(".in2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square inch ");  
        $("#arspfirst").html("in<span>&#178;</span> "); 
        v1=13;
    }
    else
    {
        $("#arsp2").html("Square inch "); 
        $("#arspsecond").html("in<span>&#178;</span> ");  
        v2=13;
    }
});
$(".rd2").click(function(){
    if(act===1)
    {
        $("#arsp1").html("Square rod ");  
        $("#arspfirst").html("rd<span>&#178;</span> "); 
        v1=14;
    }
    else
    {
        $("#arsp2").html("Square rod "); 
        $("#arspsecond").html("rd<span>&#178;</span> "); 
        v2=14;
    }
});
$("#arfirst").click(function(){   
    act=1;        
});
$("#arsecond").click(function(){ 
    act=2;      
});
$("#ar1").click(function(){   
    act=1;       
});
$("#ar2").click(function(){ 
    act=2;      
});
$(".aca").click(function(){
    st1=st2="";
    act=1;
    $("#ar1").val(st1);
    $("#ar2").val(st2);
    $("#arsp1").html("Square meter "); 
    $("#arsp2").html("Square centimeter "); 
    $("#arspfirst").html("m<span>&#178;</span> "); 
    $("#arspsecond").html("cm<span>&#178;</span> "); 
    v2=6;
    v1=4;
    ans="";
});
$(".goa").click(function(){ 
    var m;
if(act===1)
{
    ans=calculatea1(st1,v1);
    ans=calculatea2(ans,v2);
    m=ans;
    ans=ans.toString();
    if(ans.length>8)
    $("#ar2").val(m.toExponential(3));
    else
    $("#ar2").val(m.toFixed(4));
}
else
{
    ans=calculatea1(st2,v2);
    ans=calculatea2(ans,v1);
    m=ans;
    ans=ans.toString();
    if(ans.length>8)
    $("#ar1").val(m.toExponential(3));
    else
    $("#ar1").val(m.toFixed(4));
}
});
function calculatea1(st,v)//unit to centimetersquare for area
{
    if(v===1)
    return st*(1e10);
    else if(v===2)
    return st*(1e8);
    else if(v===3)
    return st*(1e6);
    else if(v===4)
    return st*10000;
    else if(v===5)
    return st*100;
    else if(v===6)
    return st*1;
    else if(v===7)
    return st*0.01;
    else if(v===8)
    return st*(1e-8);
    else if(v===9)
    return st*40468560;
    else if(v===10)
    return st*(2.58998811e10);
    else if(v===11)
    return st*8361.2736;
    else if(v===12)
    return st*929.0304;
    else if(v===13)
    return st*6.4516;
    else if(v===14)
    return st*252928.526;
}
function calculatea2(st,v)//centimetersquare to unit for area
{
    if(v===1)
    return st/(1e10);
    else if(v===2)
    return st/(1e8);
    else if(v===3)
    return st/(1e6);
    else if(v===4)
    return st/10000;
    else if(v===5)
    return st/100;
    else if(v===6)
    return st/1;
    else if(v===7)
    return st/0.01;
    else if(v===8)
    return st/(1e-8);
    else if(v===9)
    return st/40468560;
    else if(v===10)
    return st/(2.58998811e10);
    else if(v===11)
    return st/8361.2736;
    else if(v===12)
    return st/929.0304;
    else if(v===13)
    return st/6.4516;
    else if(v===14)
    return st/252928.526;
}

//numberpalette volume
$(".crossv").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".7v").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".8v").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".9v").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".4v").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".5v").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".6v").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".1v").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".2v").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".3v").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".0v").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
});
$(".decimalv").click(function(){
    if(act===1)
    st1=st1+".";
    else
    st2=st2+".";
    $("#vol1").val(st1);
    $("#vol2").val(st2);    
});
//volume
$("#volume").click(function(){
    st1=st2="";
    $("#vol1").val(st1);
    $("#vol2").val(st2);
    $("#volsp1").html("Cubic meter "); 
    $("#volsp2").html("Cubic centimeter "); 
    $("#volspfirst").html("m<span>&#179;</span> "); 
    $("#volspsecond").html("cm<span>&#179;</span> "); 
    v1=1;
    v2=3;
});
$(".m3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Cubic meter ");  
        $("#volspfirst").html("m<span>&#179;</span> "); 
        v1=1;
    }
    else
    {
        $("#volsp2").html("Cubic meter ");  
        $("#volspsecond").html("m<span>&#179;</span> ");  
        v2=1;
    }
});
$(".dm3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Cubic decimeter ");  
        $("#volspfirst").html("dm<span>&#179;</span> "); 
        v1=2;
    }
    else
    {
        $("#volsp2").html("Cubic decimeter ");  
        $("#volspsecond").html("dm<span>&#179;</span> ");
        v2=2;
    }
});
$(".cm3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Cubic centimeter ");  
        $("#volspfirst").html("cm<span>&#179;</span> "); 
        v1=3;
    }
    else
    {
        $("#volsp2").html("Cubic centimeter "); 
        $("#volspsecond").html("cm<span>&#179;</span> "); 
        v2=3;
    }
});
$(".mm3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Cubic millimeter ");  
        $("#volspfirst").html("mm<span>&#179;</span> "); 
        v1=4;
    }
    else
    {
        $("#volsp2").html("Cubic millimeter "); 
        $("#volspsecond").html("mm<span>&#179;</span> "); 
        v2=4;
    }
});
$(".hect3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Hectoliter ");  
        $("#volspfirst").html("hl "); 
        v1=5;
    }
    else
    {
        $("#volsp2").html("Hectoliter "); 
        $("#volspsecond").html("hl "); 
        v2=5;
    }
});
$(".l3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Liter ");  
        $("#volspfirst").html("l "); 
        v1=6;
    }
    else
    {
        $("#volsp2").html("Liter "); 
        $("#volspsecond").html("l "); 
        v2=6;
    }
});
$(".dl3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Deciliter ");  
        $("#volspfirst").html("dl "); 
        v1=7;
    }
    else
    {
        $("#volsp2").html("Deciliter "); 
        $("#volspsecond").html("dl "); 
        v2=7;
    }
});
$(".cl3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Centiliter ");  
        $("#volspfirst").html("cl "); 
        v1=8;
    }
    else
    {
        $("#volsp2").html("Centiliter "); 
        $("#volspsecond").html("cl "); 
        v2=8;
    }
});
$(".ml3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Milliliter ");  
        $("#volspfirst").html("ml "); 
        v1=9;
    }
    else
    {
        $("#volsp2").html("Milliliter "); 
        $("#volspsecond").html("ml "); 
        v2=9;
    }
});
$(".foot3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Cubic foot ");  
        $("#volspfirst").html("foot<span>&#179;</span> "); 
        v1=10;
    }
    else
    {
        $("#volsp2").html("Cubic foot "); 
        $("#volspsecond").html("foot<span>&#179;</span> "); 
        v2=10;
    }
});
$(".in3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Cubic inch ");  
        $("#volspfirst").html("in<span>&#179;</span> "); 
        v1=11;
    }
    else
    {
        $("#volsp2").html("Cubic inch "); 
        $("#volspsecond").html("in<span>&#179;</span> "); 
        v2=11;
    }
});
$(".yd3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Cubic yard ");  
        $("#volspfirst").html("yd<span>&#179;</span> "); 
        v1=12;
    }
    else
    {
        $("#volsp2").html("Cubic yard "); 
        $("#volspsecond").html("yd<span>&#179;</span> "); 
        v2=12;
    }
});
$(".af3").click(function(){
    if(act===1)
    {
        $("#volsp1").html("Acre-foot ");  
        $("#volspfirst").html("af<span>&#179;</span> "); 
        v1=13;
    }
    else
    {
        $("#volsp2").html("Acre-foot "); 
        $("#volspsecond").html("af<span>&#179;</span> ");
        v2=13; 
    }
});
$("#volfirst").click(function(){   
    act=1;     
});
$("#volsecond").click(function(){ 
    act=2;      
});
$("#vol1").click(function(){   
    act=1;        
});
$("#vol2").click(function(){ 
    act=2;      
});
$(".acv").click(function(){
    st1=st2="";
    act=1;
    $("#vol1").val(st1);
    $("#vol2").val(st2);
    $("#volsp1").html("Cubic meter "); 
    $("#volsp2").html("Cubic centimeter "); 
    $("#volspfirst").html("m<span>&#179;</span> "); 
    $("#volspsecond").html("cm<span>&#179;</span> "); 
    v2=3;
    v1=1;
    ans="";
});
$(".gov").click(function(){ 
    var m;
if(act===1)
{
    ans=calculatev1(st1,v1);
    ans=calculatev2(ans,v2);
    m=ans;
    ans=ans.toString();
    if(ans.length>8)
    $("#vol2").val(m.toExponential(3));
    else
    $("#vol2").val(m.toFixed(4));
}
else
{
    ans=calculatev1(st2,v2);
    ans=calculatev2(ans,v1);
    m=ans;
    ans=ans.toString();
    if(ans.length>8)
    $("#vol1").val(m.toExponential(3));
    else
    $("#vol1").val(m.toFixed(4));
}
});
function calculatev1(st,v)//unit to centimetercube for volume
{
    if(v===1)
    return st*(1e6);
    else if(v===2)
    return st*1000;
    else if(v===3)
    return st*1;
    else if(v===4)
    return st*0.001;
    else if(v===5)
    return st*100000;
    else if(v===6)
    return st*1000;
    else if(v===7)
    return st*100;
    else if(v===8)
    return st*10;
    else if(v===9)
    return st*1;
    else if(v===10)
    return st*28316.8466;
    else if(v===11)
    return st*16.387064;
    else if(v===12)
    return st*764554.858;
    else if(v===13)
    return st*(1.234e9);
}
function calculatev2(st,v)//centimetercube to unit for volume
{
    if(v===1)
    return st/(1e6);
    else if(v===2)
    return st/1000;
    else if(v===3)
    return st/1;
    else if(v===4)
    return st/0.001;
    else if(v===5)
    return st/100000;
    else if(v===6)
    return st/1000;
    else if(v===7)
    return st/100;
    else if(v===8)
    return st/10;
    else if(v===9)
    return st/1;
    else if(v===10)
    return st/28316.8466;
    else if(v===11)
    return st/16.387064;
    else if(v===12)
    return st/764554.858;
    else if(v===13)
    return st/(1.234e9);
}

//numberpalette temperature
$(".crosst").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".7t").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".8t").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".9t").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".4t").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".5t").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".6t").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".1t").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".2t").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".3t").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".0t").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
});
$(".decimalt").click(function(){
    if(act===1)
    {
        beforesign(st1);
        st1=st1+".";
    }
    else
    {
        beforesign(st2);
        st2=st2+".";
    }
    $("#temp1").val(st1);
    $("#temp2").val(st2);    
});
$(".subt").click(function(){   
    if(act===1)
    st1="-"+st1;
    else
    st2="-"+st2; 
    $("#temp1").val(st1);
    $("#temp2").val(st2);       
});
//temperature
$("#temp").click(function(){
    st1=st2="";
    $("#temp1").val(st1);
    $("#temp2").val(st2);
    $("#tempsp1").html("Celsius "); 
    $("#tempsp2").html("Fahrenheit "); 
    $("#tempspfirst").html("<span>&#176;</span>C "); 
    $("#tempspsecond").html("<span>&#176;</span>F "); 
    ans="";
    v1=1;
    v2=2;
});
$(".ct").click(function(){
    if(act===1)
    {
        $("#tempsp1").html("Celsius ");  
        $("#tempspfirst").html("<span>&#176;</span>C "); 
        v1=1;
    }
    else
    {
        $("#tempsp2").html("Celsius ");  
        $("#tempspsecond").html("<span>&#176;</span>C ");  
        v2=1;
    }
});
$(".ft").click(function(){
    if(act===1)
    {
        $("#tempsp1").html("Fahrenheit ");  
        $("#tempspfirst").html("<span>&#176;</span>F "); 
        v1=2;
    }
    else
    {
        $("#tempsp2").html("Fahrenheit ");  
        $("#tempspsecond").html("<span>&#176;</span>F ");
        v2=2;
    }
});
$(".kt").click(function(){
    if(act===1)
    {
        $("#tempsp1").html("Kelvin ");  
        $("#tempspfirst").html("K "); 
        v1=3;
    }
    else
    {
        $("#tempsp2").html("Kelvin "); 
        $("#tempspsecond").html("K "); 
        v2=3;
    }
});
$(".rt").click(function(){
    if(act===1)
    {
        $("#tempsp1").html("Rankine ");  
        $("#tempspfirst").html("<span>&#176;</span>R "); 
        v1=4;
    }
    else
    {
        $("#tempsp2").html("Rankine "); 
        $("#tempspsecond").html("<span>&#176;</span>R "); 
        v2=4;
    }
});
$(".ret").click(function(){
    if(act===1)
    {
        $("#tempsp1").html("Reaumur ");  
        $("#tempspfirst").html("<span>&#176;</span>Re "); 
        v1=5;
    }
    else
    {
        $("#tempsp2").html("Reaumur "); 
        $("#tempspsecond").html("<span>&#176;</span>Re "); 
        v2=5;
    }
});
$("#tempfirst").click(function(){   
    act=1;        
});
$("#tempsecond").click(function(){ 
    act=2;      
});
$("#temp1").click(function(){   
    act=1;        
});
$("#temp2").click(function(){ 
    act=2;      
});
$(".act").click(function(){
    st1=st2="";
    act=1;
    $("#temp1").val(st1);
    $("#temp2").val(st2);
    $("#tempsp1").html("Celsius "); 
    $("#tempsp2").html("Fahrenheit "); 
    $("#tempspfirst").html("<span>&#176;</span>C "); 
    $("#tempspsecond").html("<span>&#176;</span>F "); 
    v2=2;
    v1=1;
    ans="";
});
$(".got").click(function(){ 
if(act===1)
{
    st1=parseInt(st1);
    ans=calculatet1(st1,v1);
    ans=calculatet2(ans,v2);
    $("#temp2").val(ans.toFixed(4));
}
else
{
    ans=calculatet1(st2,v2);
    ans=calculatet2(ans,v1);
    $("#temp1").val(ans.toFixed(4));
}
});
function calculatet1(st,v)//unit to fahrenheit for temp
{
    if(v===1)
    {
        st=st*9/5+32;
        return st;
    }
    else if(v===2)
    return st*1;
    else if(v===3)
    return (st-273.15)*9/5+32;
    else if(v===4)
    return st-459.67;
    else if(v===5)
    return st*2.25+32;   
}
function calculatet2(st,v)//fahrenheit to unit for temp
{
    if(v===1)
    return (st-32)*5/9;
    else if(v===2)
    return st;
    else if(v===3)
    return (st-32)*5/9+273.15;
    else if(v===4)
    return st+459.67;
    else if(v===5)
    return (st-32)*4/9;
}

//numberpalette speed
$(".crosss").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".7s").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".8s").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".9s").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".4s").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".5s").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".6s").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".1s").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".2s").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".3s").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".0s").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
});
$(".decimals").click(function(){
    if(act===1)
    st1=st1+".";
    else
    st2=st2+".";
    $("#speed1").val(st1);
    $("#speed2").val(st2);    
});
//speed
$("#speed").click(function(){
    st1=st2="";
    $("#speed1").val(st1);
    $("#speed2").val(st2);
    $("#speedsp1").html("Meter per second "); 
    $("#speedsp2").html("Kilometer per second "); 
    $("#speedspfirst").html("m/s "); 
    $("#speedspsecond").html("km/s "); 
    v1=3;
    v2=5;
});
$(".ls").click(function(){
    if(act===1)
    {
        $("#speedsp1").html("Lightspeed ");  
        $("#speedspfirst").html("c "); 
        v1=1;
    }
    else
    {
        $("#speedsp2").html("Lightspeed ");  
        $("#speedspsecond").html("c ");  
        v2=1;
    }
});
$(".ms").click(function(){
    if(act===1)
    {
        $("#speedsp1").html("Mach ");  
        $("#speedspfirst").html("Ma "); 
        v1=2;
    }
    else
    {
        $("#speedsp2").html("Mach ");  
        $("#speedspsecond").html("Ma ");
        v2=2;
    }
});
$(".mps").click(function(){
    if(act===1)
    {
        $("#speedsp1").html("Meter per second ");  
        $("#speedspfirst").html("m/s "); 
        v1=3;
    }
    else
    {
        $("#speedsp2").html("Meter per second "); 
        $("#speedspsecond").html("m/s "); 
        v2=3;
    }
});
$(".kmh").click(function(){
    if(act===1)
    {
        $("#speedsp1").html("Kilometer per hour ");  
        $("#speedspfirst").html("km/h "); 
        v1=4;
    }
    else
    {
        $("#speedsp2").html("Kilometer per hour "); 
        $("#speedspsecond").html("km/h "); 
        v2=4;
    }
});
$(".kms").click(function(){
    if(act===1)
    {
        $("#speedsp1").html("Kilometer per second ");  
        $("#speedspfirst").html("km/s "); 
        v1=5;
    }
    else
    {
        $("#speedsp2").html("Kilometer per second "); 
        $("#speedspsecond").html("km/s "); 
        v2=5;
    }
});
$(".kns").click(function(){
    if(act===1)
    {
        $("#speedsp1").html("Knot ");  
        $("#speedspfirst").html("kn "); 
        v1=6;
    }
    else
    {
        $("#speedsp2").html("Knot "); 
        $("#speedspsecond").html("kn "); 
        v2=6;
    }
});
$(".mph").click(function(){
    if(act===1)
    {
        $("#speedsp1").html("Mile per hour ");  
        $("#speedspfirst").html("mph "); 
        v1=7;
    }
    else
    {
        $("#speedsp2").html("Mile per hour "); 
        $("#speedspsecond").html("mph "); 
        v2=7;
    }
});
$(".fps").click(function(){
    if(act===1)
    {
        $("#speedsp1").html("Foot per second ");  
        $("#speedspfirst").html("fps "); 
        v1=8;
    }
    else
    {
        $("#speedsp2").html("Foot per second "); 
        $("#speedspsecond").html("fps "); 
        v2=8;
    }
});
$(".ips").click(function(){
    if(act===1)
    {
        $("#speedsp1").html("Inch per second ");  
        $("#speedspfirst").html("ips "); 
        v1=9;
    }
    else
    {
        $("#speedsp2").html("Inch per second "); 
        $("#speedspsecond").html("ips "); 
        v2=9;
    }
});
$("#speedfirst").click(function(){   
    act=1;        
});
$("#speedsecond").click(function(){ 
    act=2;      
});
$("#speed1").click(function(){   
    act=1;        
});
$("#speed2").click(function(){ 
    act=2;      
});
$(".acs").click(function(){
    st1=st2="";
    act=1;
    $("#speed1").val(st1);
    $("#speed2").val(st2);
    $("#speedsp1").html("Meter per second "); 
    $("#speedsp2").html("Kilometer per second "); 
    $("#speedspfirst").html("m/s "); 
    $("#speedspsecond").html("km/s "); 
    v2=5;
    v1=3;
    ans="";
});
$(".gos").click(function(){ 
    var m;
if(act===1)
{
    ans=calculates1(st1,v1);
    ans=calculates2(ans,v2);
    m=ans;
    ans=ans.toString();
    if(ans.length>8)
    $("#speed2").val(m.toExponential(3));
    else
    $("#speed2").val(m.toFixed(4));
}
else
{
    ans=calculates1(st2,v2);
    ans=calculates2(ans,v1);
    m=ans;
    ans=ans.toString();
    if(ans.length>8)
    $("#speed1").val(m.toExponential(3));
    else
    $("#speed1").val(m.toFixed(4));
}
});
function calculates1(st,v)//unit to m/s for speed
{
    if(v===1)
    return st*(299792458);
    else if(v===2)
    return st*340.3;
    else if(v===3)
    return st;
    else if(v===4)
    return st*0.277777778;
    else if(v===5)
    return st*1000;
    else if(v===6)
    return st*0.514444444;
    else if(v===7)
    return st*0.44704;
    else if(v===8)
    return st*0.3048;
    else if(v===9)
    return st*0.0254;   
}
function calculates2(st,v)//m/s to unit for speed
{
    if(v===1)
    return st/(299792458);
    else if(v===2)
    return st/340.3;
    else if(v===3)
    return st;
    else if(v===4)
    return st/0.277777778;
    else if(v===5)
    return st/1000;
    else if(v===6)
    return st/0.514444444;
    else if(v===7)
    return st/0.44704;
    else if(v===8)
    return st/0.3048;
    else if(v===9)
    return st/0.0254;
}

//numberpalette time
$(".crossc").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".7c").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".8c").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".9c").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".4c").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".5c").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".6c").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".1c").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".2c").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".3c").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".0c").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#time1").val(st1);
    $("#time2").val(st2);
});
$(".decimalc").click(function(){
    if(act===1)
    st1=st1+".";
    else
    st2=st2+".";
    $("#time1").val(st1);
    $("#time2").val(st2);    
});
//time
$("#time").click(function(){
    st1=st2="";
    $("#time1").val(st1);
    $("#time2").val(st2);
    $("#timesp1").html("Minute "); 
    $("#timesp2").html("Second "); 
    $("#timespfirst").html("min "); 
    $("#timespsecond").html("s "); 
    v1=5;
    v2=6;
});
$(".yc").click(function(){
    if(act===1)
    {
        $("#timesp1").html("Year ");  
        $("#timespfirst").html("y "); 
        v1=1;
    }
    else
    {
        $("#timesp2").html("Year ");  
        $("#timespsecond").html("y ");  
        v2=1;
    }
});
$(".wkc").click(function(){
    if(act===1)
    {
        $("#timesp1").html("Week ");  
        $("#timespfirst").html("wk "); 
        v1=2;
    }
    else
    {
        $("#timesp2").html("Week ");  
        $("#timespsecond").html("wk ");
        v2=2;
    }
});
$(".dc").click(function(){
    if(act===1)
    {
        $("#timesp1").html("Day ");  
        $("#timespfirst").html("d "); 
        v1=3;
    }
    else
    {
        $("#timesp2").html("Day "); 
        $("#timespsecond").html("d "); 
        v2=3;
    }
});
$(".hc").click(function(){
    if(act===1)
    {
        $("#timesp1").html("Hour ");  
        $("#timespfirst").html("h "); 
        v1=4;
    }
    else
    {
        $("#timesp2").html("Hour "); 
        $("#timespsecond").html("h "); 
        v2=4;
    }
});
$(".minc").click(function(){
    if(act===1)
    {
        $("#timesp1").html("Minute ");  
        $("#timespfirst").html("min "); 
        v1=5;
    }
    else
    {
        $("#timesp2").html("Minute "); 
        $("#timespsecond").html("min "); 
        v2=5;
    }
});
$(".sc").click(function(){
    if(act===1)
    {
        $("#timesp1").html("Second ");  
        $("#timespfirst").html("s "); 
        v1=6;
    }
    else
    {
        $("#timesp2").html("Second "); 
        $("#timespsecond").html("s "); 
        v2=6;
    }
});
$(".msc").click(function(){
    if(act===1)
    {
        $("#timesp1").html("Millisecond ");  
        $("#timespfirst").html("ms "); 
        v1=7;
    }
    else
    {
        $("#timesp2").html("Millisecond "); 
        $("#timespsecond").html("ms "); 
        v2=7;
    }
});
$(".usc").click(function(){
    if(act===1)
    {
        $("#timesp1").html("Microsecond ");  
        $("#timespfirst").html("<span>&micro;</span>ms "); 
        v1=8;
    }
    else
    {
        $("#timesp2").html("Microsecond "); 
        $("#timespsecond").html("<span>&micro;</span>ms "); 
        v2=8;
    }
});
$(".psc").click(function(){
    if(act===1)
    {
        $("#timesp1").html("Picosecond ");  
        $("#timespfirst").html("ps "); 
        v1=9;
    }
    else
    {
        $("#timesp2").html("Picosecond "); 
        $("#timespsecond").html("ps "); 
        v2=9;
    }
});
$("#timefirst").click(function(){   
    act=1;        
});
$("#timesecond").click(function(){ 
    act=2;      
});
$("#time1").click(function(){   
    act=1;        
});
$("#time2").click(function(){ 
    act=2;      
});
$(".acc").click(function(){
    st1=st2="";
    act=1;
    $("#time1").val(st1);
    $("#time2").val(st2);
    $("#timesp1").html("Minute "); 
    $("#timesp2").html("Second "); 
    $("#timespfirst").html("min "); 
    $("#timespsecond").html("s "); 
    v2=6;
    v1=5;
    ans="";
});
$(".goc").click(function(){ 
    var m;
if(act===1)
{
    ans=calculatec1(st1,v1);
    ans=calculatec2(ans,v2);
    m=ans;
    ans=ans.toString();
    if(ans.length>8)
    $("#time2").val(m.toExponential(3));
    else
    $("#time2").val(m.toFixed(4));
}
else
{
    ans=calculatec1(st2,v2);
    ans=calculatec2(ans,v1);
    m=ans;
    ans=ans.toString();
    if(ans.length>8)
    $("#time1").val(m.toExponential(3));
    else
    $("#time1").val(m.toFixed(4));
}
});
function calculatec1(st,v)//unit to second for time
{
    if(v===1)
    return st*31536000;
    else if(v===2)
    return st*604800;
    else if(v===3)
    return st*86400;
    else if(v===4)
    return st*3600;
    else if(v===5)
    return st*60;
    else if(v===6)
    return st*1;
    else if(v===7)
    return st*0.001;
    else if(v===8)
    return st*(1e-6);
    else if(v===9)
    return st*(1e-12);   
}
function calculatec2(st,v)//second to unit for time
{
    if(v===1)
    return st/31536000;
    else if(v===2)
    return st/604800;
    else if(v===3)
    return st/86400;
    else if(v===4)
    return st/3600;
    else if(v===5)
    return st/60;
    else if(v===6)
    return st/1;
    else if(v===7)
    return st/0.001;
    else if(v===8)
    return st/(1e-6);
    else if(v===9)
    return st/(1e-12); 
}

//numberpalette mass
$(".crossm").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".7m").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".8m").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".9m").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".4m").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".5m").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".6m").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".1m").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".2m").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".3m").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".0m").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
});
$(".decimalm").click(function(){
    if(act===1)
    st1=st1+".";
    else
    st2=st2+".";
    $("#mass1").val(st1);
    $("#mass2").val(st2);    
});
//mass
$("#mass").click(function(){
    st1=st2="";
    $("#mass1").val(st1);
    $("#mass2").val(st2);
    $("#masssp1").html("Kilogram "); 
    $("#masssp2").html("Gram "); 
    $("#massspfirst").html("kg "); 
    $("#massspsecond").html("g "); 
    v1=2;
    v2=3;
});
$(".tm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Tonne ");  
        $("#massspfirst").html("t "); 
        v1=1;
    }
    else
    {
        $("#masssp2").html("Tonne ");  
        $("#massspsecond").html("t ");  
        v2=1;
    }
});
$(".kgm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Kilogram ");  
        $("#massspfirst").html("kg "); 
        v1=2;
    }
    else
    {
        $("#masssp2").html("Kilogram ");  
        $("#massspsecond").html("kg ");
        v2=2;
    }
});
$(".gm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Gram ");  
        $("#massspfirst").html("g "); 
        v1=3;
    }
    else
    {
        $("#masssp2").html("Gram "); 
        $("#massspsecond").html("g "); 
        v2=3;
    }
});
$(".mgm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Milligram ");  
        $("#massspfirst").html("mg "); 
        v1=4;
    }
    else
    {
        $("#masssp2").html("Milligram "); 
        $("#massspsecond").html("mg "); 
        v2=4;
    }
});
$(".umgm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Microgram ");  
        $("#massspfirst").html("<span>&micro;</span>g "); 
        v1=5;
    }
    else
    {
        $("#masssp2").html("Microgram "); 
        $("#massspsecond").html("<span>&micro;</span>g "); 
        v2=5;
    }
});
$(".qm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Quintal ");  
        $("#massspfirst").html("q "); 
        v1=6;
    }
    else
    {
        $("#masssp2").html("Quintal "); 
        $("#massspsecond").html("q "); 
        v2=6;
    }
});
$(".lbm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Pound ");  
        $("#massspfirst").html("lb "); 
        v1=7;
    }
    else
    {
        $("#masssp2").html("Pound "); 
        $("#massspsecond").html("lb "); 
        v2=7;
    }
});
$(".ozm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Ounce ");  
        $("#massspfirst").html("oz "); 
        v1=8;
    }
    else
    {
        $("#masssp2").html("Ounce "); 
        $("#massspsecond").html("oz "); 
        v2=8;
    }
});
$(".ctm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Carat ");  
        $("#massspfirst").html("ct "); 
        v1=9;
    }
    else
    {
        $("#masssp2").html("Carat "); 
        $("#massspsecond").html("ct "); 
        v2=9;
    }
});
$(".grm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Grain ");  
        $("#massspfirst").html("gr "); 
        v1=10;
    }
    else
    {
        $("#masssp2").html("Grain "); 
        $("#massspsecond").html("gr "); 
        v2=10;
    }
});
$(".ltm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Long ton ");  
        $("#massspfirst").html("l.t "); 
        v1=11;
    }
    else
    {
        $("#masssp2").html("Long ton "); 
        $("#massspsecond").html("l.t "); 
        v2=11;
    }
});
$(".shtm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Short ton ");  
        $("#massspfirst").html("sh.t "); 
        v1=12;
    }
    else
    {
        $("#masssp2").html("Short ton "); 
        $("#massspsecond").html("sh.t "); 
        v2=12;
    }
});
$(".ukm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("UK hundredweight ");  
        $("#massspfirst").html("cwt "); 
        v1=13;
    }
    else
    {
        $("#masssp2").html("UK hundredweight "); 
        $("#massspsecond").html("cwt "); 
        v2=13;
    }
});
$(".usm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("US hundredweight ");  
        $("#massspfirst").html("cwt "); 
        v1=14;
    }
    else
    {
        $("#masssp2").html("US hundredweight "); 
        $("#massspsecond").html("cwt "); 
        v2=14;
    }
});
$(".stm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Stone ");  
        $("#massspfirst").html("st "); 
        v1=15;
    }
    else
    {
        $("#masssp2").html("Stone "); 
        $("#massspsecond").html("st "); 
        v2=15;
    }
});
$(".drm").click(function(){
    if(act===1)
    {
        $("#masssp1").html("Dram ");  
        $("#massspfirst").html("dr "); 
        v1=16;
    }
    else
    {
        $("#masssp2").html("Dram "); 
        $("#massspsecond").html("dr "); 
        v2=16;
    }
});
$("#massfirst").click(function(){   
    act=1;        
});
$("#masssecond").click(function(){ 
    act=2;      
});
$("#mass1").click(function(){   
    act=1;        
});
$("#mass2").click(function(){ 
    act=2;      
});
$(".acm").click(function(){
    st1=st2="";
    act=1;
    $("#mass1").val(st1);
    $("#mass2").val(st2);
    $("#masssp1").html("Kilogram "); 
    $("#masssp2").html("Gram "); 
    $("#massspfirst").html("kg "); 
    $("#massspsecond").html("g "); 
    v2=3;
    v1=2;
    ans="";
});
$(".gom").click(function(){ 
    var m;
if(act===1)
{
    ans=calculatem1(st1,v1);
    ans=calculatem2(ans,v2);
    m=ans;
    ans=ans.toString();
    if(ans.length>8)
    $("#mass2").val(m.toExponential(3));
    else
    $("#mass2").val(m.toFixed(4));
}
else
{
    ans=calculatem1(st2,v2);
    ans=calculatem2(ans,v1);
    m=ans;
    ans=ans.toString();
    if(ans.length>8)
    $("#mass1").val(m.toExponential(3));
    else
    $("#mass1").val(m.toFixed(4));
}
});
function calculatem1(st,v)//unit to gram for mass
{
    if(v===1)
    return st*1000000;
    else if(v===2)
    return st*1000;
    else if(v===3)
    return st;
    else if(v===4)
    return st*0.001;
    else if(v===5)
    return st*(1e-6);
    else if(v===6)
    return st*100000;
    else if(v===7)
    return st*453.59237;
    else if(v===8)
    return st*28.3495231;
    else if(v===9)
    return st*0.2; 
    else if(v===10)
    return st*0.06479891;
    else if(v===11)
    return st*1016046.91;
    else if(v===12)
    return st*907184.74;  
    else if(v===13)
    return st*50802.3454;
    else if(v===14)
    return st*45359.237;
    else if(v===15)
    return st*6350.29318;
    else if(v===16)
    return st*1.7718452;
}
function calculatem2(st,v)//gram to unit for mass
{
    if(v===1)
    return st/1000000;
    else if(v===2)
    return st/1000;
    else if(v===3)
    return st;
    else if(v===4)
    return st/0.001;
    else if(v===5)
    return st/(1e-6);
    else if(v===6)
    return st/100000;
    else if(v===7)
    return st/453.59237;
    else if(v===8)
    return st/28.3495231;
    else if(v===9)
    return st/0.2; 
    else if(v===10)
    return st/0.06479891;
    else if(v===11)
    return st/1016046.91;
    else if(v===12)
    return st/907184.74;  
    else if(v===13)
    return st/50802.3454;
    else if(v===14)
    return st/45359.237;
    else if(v===15)
    return st/6350.29318;
    else if(v===16)
    return st/1.7718452;
}

//numberpalette numeralsystem
$(".crossn").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".7n").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".8n").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".9n").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".4n").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".5n").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".6n").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".1n").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".2n").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".3n").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".0n").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".decimaln").click(function(){
    if(act===1)
    st1=st1+".";
    else
    st2=st2+".";
    $("#num1").val(st1);
    $("#num2").val(st2);    
});
$(".an").click(function(){
    if(act===1)
    st1=st1+"A";
    else
    st2=st2+"A";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".bn").click(function(){
    if(act===1)
    st1=st1+"B";
    else
    st2=st2+"B";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".cn").click(function(){
    if(act===1)
    st1=st1+"C";
    else
    st2=st2+"C";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".dn").click(function(){
    if(act===1)
    st1=st1+"D";
    else
    st2=st2+"D";
    $("#num1").val(st1);
    $("#num2").val(st2);
});
$(".en").click(function(){
    if(act===1)
    st1=st1+"E";
    else
    st2=st2+"E";
    $("#num1").val(st1);
    $("#num2").val(st2);    
});
$(".fn").click(function(){
    if(act===1)
    st1=st1+"F";
    else
    st2=st2+"F";
    $("#num1").val(st1);
    $("#num2").val(st2);    
});
//numeralsystem
$("#num").click(function(){
    st1=st2="";
    $("#num1").val(st1);
    $("#num2").val(st2);
    $("#numspfirst").html("DEC "); 
    $("#numspsecond").html("BIN "); 
    v1=3;
    v2=1;
    act=1;
    visibilitybuttons(v1);        
});
$(".bin").click(function(){
    if(act===1)
    {         
        $("#numspfirst").html("BIN "); 
        v1=1;  
        visibilitybuttons(v1);     
    }
    else
    {        
        $("#numspsecond").html("BIN ");  
        v2=1;
        visibilitybuttons(v2);
    }        
});
$(".oct").click(function(){
    if(act===1)
    {         
        $("#numspfirst").html("OCT "); 
        v1=2;
        visibilitybuttons(v1);
    }
    else
    {        
        $("#numspsecond").html("OCT ");
        v2=2;
        visibilitybuttons(v2);
    }    
});
$(".dec").click(function(){
    if(act===1)
    {        
        $("#numspfirst").html("DEC "); 
        v1=3;
        visibilitybuttons(v1);
    }
    else
    {       
        $("#numspsecond").html("DEC "); 
        v2=3;
        visibilitybuttons(v2);
    }
});
$(".hex").click(function(){
    if(act===1)
    {         
        $("#numspfirst").html("HEX "); 
        v1=4;
        visibilitybuttons(v1);
    }
    else
    {        
        $("#numspsecond").html("HEX "); 
        v2=4;
        visibilitybuttons(v2);
    }
});
$("#numfirst").click(function(){   
    act=1; 
    visibilitybuttons(v1);
});
$("#numsecond").click(function(){ 
    act=2; 
    visibilitybuttons(v2);     
});
$("#num1").click(function(){   
    act=1;   
    visibilitybuttons(v1);     
});
$("#num2").click(function(){ 
    act=2;    
    visibilitybuttons(v2);  
});
function visibilitybuttons(v)
{
    switch(v)
    {
        case 1:
                $(".2n").css("visibility","hidden");
                $(".3n").css("visibility","hidden");
                $(".4n").css("visibility","hidden");
                $(".5n").css("visibility","hidden");
                $(".6n").css("visibility","hidden");
                $(".7n").css("visibility","hidden");
                $(".8n").css("visibility","hidden");
                $(".9n").css("visibility","hidden");
                $(".an").css("visibility","hidden");
                $(".bn").css("visibility","hidden");
                $(".cn").css("visibility","hidden");
                $(".dn").css("visibility","hidden");
                $(".en").css("visibility","hidden");
                $(".fn").css("visibility","hidden");        
                $(".0n").css("visibility","visible");
                $(".1n").css("visibility","visible");
            break;
        case 2:
                $(".7n").css("visibility","hidden");
                $(".8n").css("visibility","hidden");
                $(".9n").css("visibility","hidden");
                $(".an").css("visibility","hidden");
                $(".bn").css("visibility","hidden");
                $(".cn").css("visibility","hidden");
                $(".dn").css("visibility","hidden");
                $(".en").css("visibility","hidden");
                $(".fn").css("visibility","hidden");            
                $(".0n").css("visibility","visible");
                $(".1n").css("visibility","visible");
                $(".2n").css("visibility","visible");
                $(".3n").css("visibility","visible");
                $(".4n").css("visibility","visible");
                $(".5n").css("visibility","visible");
                $(".6n").css("visibility","visible");
                $(".7n").css("visibility","visible");
            break;
        case 3:
                $(".an").css("visibility","hidden");
                $(".bn").css("visibility","hidden");
                $(".cn").css("visibility","hidden");
                $(".dn").css("visibility","hidden");
                $(".en").css("visibility","hidden");
                $(".fn").css("visibility","hidden");
                $(".0n").css("visibility","visible");
                $(".1n").css("visibility","visible");
                $(".2n").css("visibility","visible");
                $(".3n").css("visibility","visible");
                $(".4n").css("visibility","visible");
                $(".5n").css("visibility","visible");
                $(".6n").css("visibility","visible");
                $(".7n").css("visibility","visible");
                $(".8n").css("visibility","visible");
                $(".9n").css("visibility","visible");
            break;
        case 4:
                $(".0n").css("visibility","visible");
                $(".1n").css("visibility","visible");
                $(".2n").css("visibility","visible");
                $(".3n").css("visibility","visible");
                $(".4n").css("visibility","visible");
                $(".5n").css("visibility","visible");
                $(".6n").css("visibility","visible");
                $(".7n").css("visibility","visible");
                $(".8n").css("visibility","visible");
                $(".9n").css("visibility","visible");
                $(".an").css("visibility","visible");
                $(".bn").css("visibility","visible");
                $(".cn").css("visibility","visible");
                $(".dn").css("visibility","visible");
                $(".en").css("visibility","visible");
                $(".fn").css("visibility","visible");
            break;
    }
}
$(".acn").click(function(){
    st1=st2="";
    act=1;
    $("#num1").val(st1);
    $("#num2").val(st2);    
    $("#numspfirst").html("DEC "); 
    $("#numspsecond").html("BIN "); 
    v2=1;
    v1=3;
    ans="";
});
$(".gon").click(function(){ 
if(act===1)
{
    ans=calculaten1(st1,v1);
    ans=calculaten2(ans,v2);    
    $("#num2").val(ans);
}
else
{
    ans=calculaten1(st2,v2);
    ans=calculaten2(ans,v1);
    $("#num1").val(ans);
}
});
function calculaten1(st,v)//system to decimal for numeralsystem
{
var t,m,n,z,c,q1,q2,t;
q1=q2="";
switch(v)
{
case 1:
n=0;
z=0;
t=st.indexOf(".");
if(t!==-1)
{
    q2=st.substring(t+1,st.length);
    q1=st.substring(0,t);
}
else
q1=st;
t=parseInt(q1);
while(t!==0)
{
m=t%10;
t=t/10;
m=Math.floor(m);
t=Math.floor(t);
z=z+m*parseInt(Math.pow(2,n));
n++;
}
if(q2!=="")
{
    t=parseInt(q2);
    n=q2.length;
    n=-n;
while(t!==0)
{
m=t%10;
t=t/10;
m=Math.floor(m);
t=Math.floor(t);
z=z+m*Math.pow(2,n);
n++;
}
}
break;

case 2:
n=0;
z=0;
t=st.indexOf(".");
if(t!==-1)
{
    q2=st.substring(t+1,st.length);
    q1=st.substring(0,t);
}
else
q1=st;
t=parseInt(q1);
while(t!==0)
{
 m=t%10;
t=t/10;
m=Math.floor(m);
t=Math.floor(t);
z=z+m*parseInt(Math.pow(8,n));
n++;
}
if(q2!=="")
{
    t=parseInt(q2);
    n=q2.length;
    n=-n;
    while(t!==0)
{
m=t%10;
t=t/10;
m=Math.floor(m);
t=Math.floor(t);
z=z+m*Math.pow(8,n);
n++;
}
}
return z; 

case 3:
z=st;
break;    

case 4:
n=0;
z=0;
t=st.indexOf(".");
if(t!==-1)
{
    q2=st.substring(t+1,st.length);
    q1=st.substring(0,t);
}
else
q1=st;
for(var b=q1.length-1;b>=0;b--)
{
c=q1.charAt(b);                      
if(c==='A')
z=z+10*parseInt(Math.pow(16,n));
else if(c=='B')
z=z+11*parseInt(Math.pow(16,n));
else if(c=='C')
z=z+12*parseInt(Math.pow(16,n));
else if(c=='D')
z=z+13*parseInt(Math.pow(16,n));
else if(c=='E')
z=z+14*parseInt(Math.pow(16,n));
else if(c=='F')
z=z+15*parseInt(Math.pow(16,n));
else            
{
    m=parseInt(c);     
    z=z+m*parseInt(Math.pow(16,n));
}         
n++;             
}

if(q2!=="")
{
    n=q2.length;
    n=-n;
for(var b=q2.length-1;b>=0;b--)
{
c=q2.charAt(b);                      
if(c==='A')
z=z+10*parseInt(Math.pow(16,n));
else if(c=='B')
z=z+11*parseInt(Math.pow(16,n));
else if(c=='C')
z=z+12*parseInt(Math.pow(16,n));
else if(c=='D')
z=z+13*parseInt(Math.pow(16,n));
else if(c=='E')
z=z+14*parseInt(Math.pow(16,n));
else if(c=='F')
z=z+15*parseInt(Math.pow(16,n));
else            
{
    m=parseInt(c);     
    z=z+m*parseInt(Math.pow(16,n));
}         
n++;             
}
z=Math.floor(z);
}
break;
}//switch end
return z;    
}
function calculaten2(st,v)//decimal to other for numeralsystem
{
var m,n,z,q1,q2,t,y;
switch(v)
{
case 1:
    y="";  
    t=st.indexOf(".");
    if(t!==-1)
    {
        q2=st.substring(t,st.length);
        q1=st.substring(0,t);
        n=1;
    }
    else
    {
        q1=st;
        n=0;
    }
    t=parseInt(q1);
    while(t!==0)
    {
        z=t%2;
        t=t/2;
        z=Math.floor(z);
        t=Math.floor(t);
        y=z+""+y;           
    } 
    
    if(n===1)
    {
        t=Number(q2);
        y=y+".";
        n=0;        
    while(t!==0 && n<4)
    {
        z=t*2;
        m=parseInt(z);
        t=z-m;
        y=y+""+m;
        n++;
    }
}
break;
case 2:
    y="";  
    t=st.indexOf(".");
    if(t!==-1)
    {
        q2=st.substring(t,st.length);
        q1=st.substring(0,t);
        n=1;
    }
    else
    {
        q1=st;
        n=0;
    }
    t=parseInt(q1);
    while(t!==0)
    {
        z=t%8;
        t=t/8;
        z=Math.floor(z);
        t=Math.floor(t);
        y=z+""+y;           
    } 
    
    if(n===1)
    {
        t=Number(q2);
        y=y+".";
        n=0;        
    while(t!==0 && n<4)
    {
        z=t*8;
        m=parseInt(z);
        t=z-m;
        y=y+""+m;
        n++;
    }
}
break;
case 3:
        y=st;
break;
case 4:
    y="";  
    t=st.indexOf(".");
    if(t!==-1)
    {
        q2=st.substring(t,st.length);
        q1=st.substring(0,t);
        n=1;
    }
    else
    {
        q1=st;
        n=0;
    }
    t=parseInt(q1);
    while(t!==0)
    {
        z=t%16;
        t=t/16;
        z=Math.floor(z);
        t=Math.floor(t);
        if(z===10)
        z="A";
        else if(z===11)
        z="B";
        else if(z===12)
        z="C";
        else if(z===13)
        z="D";
        else if(z===14)
        z="E";
        else if(z===15)
        z="F";
        y=z+""+y;         
    } 
    
    if(n===1)
    {
        t=Number(q2);
        y=y+".";
        n=0;        
    while(t!==0 && n<4)
    {
        z=t*16;
        m=parseInt(z);
        t=z-m;
        if(m===10)
        m="A";
        else if(m===11)
        m="B";
        else if(m===12)
        m="C";
        else if(m===13)
        m="D";
        else if(m===14)
        m="E";
        else if(m===15)
        m="F";
        y=y+""+m;
        n++;
    }
}
break;
} //switch end
return y;
}

//datedifference
var d1,d2,m1,m2,y1,y2,re=[];
$("#datediff").click(function(){
    st1=st2="";
    st1=$("#from").val();
    st2=$("#to").val();
    $(".yearans").html("0"); 
    $(".monthans").html("0"); 
    $(".dayans").html("0");
    $("#from").val("dd-----yyyy");
    $("#to").val("dd-----yyyy"); 
    $(".fromans").html("-"); 
    $(".toans").html("-");
});
$(".getdiff").click(function(){       
st1=$("#from").val();
st2=$("#to").val();
y1=st1.substring(0,4);
m1=st1.substring(5,7);
d1=st1.substring(8,10);
y2=st2.substring(0,4);
m2=st2.substring(5,7);
d2=st2.substring(8,10);
d1=parseInt(d1);
m1=parseInt(m1);
y1=parseInt(y1);
d2=parseInt(d2);
m2=parseInt(m2);
y2=parseInt(y2);   
if(d1===d2 && m1===m2 && y1===y2)
{
$(".fromans").html(d1+"-"+m1+"-"+y1);
$(".toans").html(d2+"-"+m2+"-"+y2);
$(".yearans").html("0");
$(".monthans").html("0");
$(".dayans").html("0");
}
else if(y2<y1)
part1();
else if(y2===y1 && m2<=m1)
{
if(m2===m1 && d2<d1)
part1();
else if(m2<m1)
part1();
else
part2(d1,m1,y1,d2,m2,y2);
}
else
part2(d1,m1,y1,d2,m2,y2);
});
function part1()
{
    alert("ERROR!");
    st1=st2="";
    st1=$("#from").val();
    st2=$("#to").val();
    $(".yearans").html("0"); 
    $(".monthans").html("0"); 
    $(".dayans").html("0");
    $("#from").val("dd-----yyyy");
    $("#to").val("dd-----yyyy"); 
    $(".fromans").html("-"); 
    $(".toans").html("-");
}
function part2(d1,m1,y1,d2,m2,y2)
{
    $(".fromans").html(d1+"-"+m1+"-"+y1);
$(".toans").html(d2+"-"+m2+"-"+y2);
re=daysinbetween(d1,m1,y1,d2,m2,y2);
$(".yearans").html(re[0]);
$(".monthans").html(re[1]);
$(".dayans").html(re[2]);
}
//age
var d1,d2,m1,m2,y1,y2,days,dayname="";
$("#age").click(function(){
    st1=st2="";
    st1=$("#from").val();
    st2=$("#to").val();
    $(".yearage").html("0"); 
    $(".monthage").html("0"); 
    $(".weekage").html("0"); 
    $(".dayage").html("0");
    $(".hourage").html("0");
    $(".minage").html("0");
    $("#dob").val("dd-----yyyy");
    $("#today").val("dd-----yyyy"); 
    $(".y1").html("0"); 
    $(".m1").html("0"); 
    $(".d1").html("0");
    $(".m2").html("0"); 
    $(".d2").html("0");
    $(".weekday").html("WEEKDAY");
});
$(".getage").click(function(){    
st1=$("#dob").val();
st2=$("#today").val();
y1=st1.substring(0,4);
m1=st1.substring(5,7);
d1=st1.substring(8,10);
y2=st2.substring(0,4);
m2=st2.substring(5,7);
d2=st2.substring(8,10);
d1=parseInt(d1);
m1=parseInt(m1);
y1=parseInt(y1);
d2=parseInt(d2);
m2=parseInt(m2);
y2=parseInt(y2); 
if(d1===d2 && m1===m2 && y1===y2)
{
    $(".y1").html("0");
    $(".m1").html("0"); 
    $(".d1").html("0");
    $(".yearage").html("0");
    $(".dayage").html("0");
    $(".monthage").html("0");
    $(".weekage").html("0");
    $(".hourage").html("0");
    $(".minage").html("0");
    $(".weekday").html(weekdayname(d1,m1,y1));
    $(".m2").html("0"); 
    $(".d2").html("0");
}
else if(y2<y1)
part3();
else if(y2===y1 && m2<=m1)
{
if(m2===m1 && d2<d1)
part3();
else if(m2<m1)
part3();
else
part4(d1,m1,y1,d2,m2,y2);
}
else
part4(d1,m1,y1,d2,m2,y2);
});
function part3()
{
    alert("ERROR!");
    st1=st2="";
    st1=$("#from").val();
    st2=$("#to").val();
    $(".yearage").html("0"); 
    $(".monthage").html("0"); 
    $(".weekage").html("0"); 
    $(".dayage").html("0");
    $(".hourage").html("0");
    $(".minage").html("0");
    $("#dob").val("dd-----yyyy");
    $("#today").val("dd-----yyyy"); 
    $(".y1").html("0"); 
    $(".m1").html("0"); 
    $(".d1").html("0");
    $(".m2").html("0"); 
    $(".d2").html("0");
    $(".weekday").html("WEEKDAY");
}
function part4(d1,m1,y1,d2,m2,y2)
{
    re=daysinbetween(d1,m1,y1,d2,m2,y2);
    $(".y1").html(re[0]);
        $(".m1").html(re[1]); 
        $(".d1").html(re[2]);
        $(".yearage").html(re[0]);
        $(".dayage").html(re[3]);
        $(".monthage").html(parseInt(re[3]/30.4167));
        $(".weekage").html(parseInt(re[3]/7));
        $(".hourage").html(parseInt(re[3]*24));
        $(".minage").html(parseInt(re[3]*24*60));
    y1=y2;
    if(m2>m1)
    y1++;
    else if(m2===m1)
    {
        if(d2>d1)
        y1++;
    }
    //now d1/m1/y1 is new birthday
    re=daysinbetween(d2,m2,y2,d1,m1,y1);
    dayname=weekdayname(d1,m1,y1);
    $(".weekday").html(weekdayname(d1,m1,y1));
    $(".m2").html(re[1]); 
    $(".d2").html(re[2]);
}
function weekdayname(d1,m1,y1)
{
day=0;
var i=0;
day=day+d1;
for(i=1;i<m1;i++)
day=day+monthcode(i,y1);
i=parseInt(y1/100);
if(i%4!=0)
day=day+i*5;
i=y1%100;
day=day+--i;
day=day+parseInt(i/4);
day=day%7;
s=weekd(day);
return s;
}
function monthcode(m1,y1)
{
    var c=0;
    var t=false;
    switch(m1)
    {
    case 1:
    c=31;
    break;
    case 2:
    t=leap(y1);
    if(t)
    c=29;
    else
    c=28;
    break;
    case 3:
    c=31;
    break;
    case 4:
    c=30;
    break;
    case 5:
    c=31;
    break;
    case 6:
    c=30;
    break;
    case 7:
    c=31;
    break; 
    case 8:
    c=31;
    break;
    case 9:
    c=30;
    break;
    case 10:
    c=31;
    break;
    case 11:
    c=30;
    break;
    case 12:
    c=31;
    break;
    }
    return c;
}
function weekd(m1)
{
    var t="";
    switch(m1)
    {
    case 1:
    t="MONDAY";
    break;
    case 2:
    t="TUESDAY";
    break;
    case 3:
    t="WEDNESDAY";
    break;
    case 4:
    t="THURSDAY";
    break;
    case 5:
    t="FRIDAY";
    break;
    case 6:
    t="SATURDAY";
    break;
    case 0:
    t="SUNDAY";
    break;
    }
    return t;
}
function daysinbetween(d1,m1,y1,d2,m2,y2)
{
    var day=0,i,l=0;
    var t=false;    
if(m1<m2)
{
switch(m1)
{
case 1:
day=31-d1;
break;

case 2:
t=leap(y1);
if(t===1)
{
l++;
day=29-d1;
}
else
day=28-d1;
break;
case 3:
day=31-d1;
break;
case 4:
day=30-d1;
break;
case 5:
day=31-d1;
break;
case 6:
day=30-d1;
break;
case 7:
day=31-d1;
break;
case 8:
day=31-d1;
break;
case 9:
day=30-d1;
break;
case 10:
day=31-d1;
break;
case 11:
day=30-d1;
break;
case 12:
day=31-d1;
break;
}
for(i=m1+1;i<m2;i++)
   day=day+month(i);
day=day+d2;
day=day+365*(y2-y1);
for(i=y1+1;i<y2;i++)
{
t=leap(i);
if(t===1)
{
l++;
day++;
}
}
if(m2>2)
{
t=leap(y2);
if(t===1)
{
day++;
l++;
}
}
}
else if(m1>m2)
{
switch(m1)
{
case 1:
day=31-d1;
break;
case 2:
t=leap(y1);
if(t===1)
{
    l++;
day=29-d1;
}
else
day=28-d1;
break;
case 3:
day=31-d1;
break;
case 4:
day=30-d1;
break;
case 5:
day=31-d1;
break;
case 6:
day=30-d1;
break;
case 7:
day=31-d1;
break;
case 8:
day=31-d1;
break;
case 9:
day=30-d1;
break;
case 10:
day=31-d1;
break;
case 11:
day=30-d1;
break;
case 12:
day=31-d1;
break;
}
for(i=m1+1;i<=12;i++)
day=day+month(i);
day=day+365*(y2-y1-1);
for(i=1;i<m2;i++)
day=day+month(i);
day=day+d2;
for(i=y1+1;i<y2;i++)
{
t=leap(i);
if(t===1)
{
l++;
day++;
}
}
t=leap(y2);
if(m2>2)
{
if(t===1)
{
l++;
day++;
}
}
}
else if(m1===m2)
{
if(y1===y2)
day=d2-d1;
else
{
switch(m1)
{
case 1:
day=31-d1;
break;
case 2:
t=leap(y1);
if(t===1)
{
l++;
day=29-d1;
}
else
day=28-d1;
break;
case 3:
day=31-d1;
break;
case 4:
day=30-d1;
break;
case 5:
day=31-d1;
break;
case 6:
day=30-d1;
break;
case 7:
day=31-d1;
break;
case 8:
day=31-d1;
break;
case 9:
day=30-d1;
break;
case 10:
day=31-d1;
break;
case 11:
day=30-d1;
break;
case 12:
day=31-d1;
break;
}
for(i=m1+1;i<=12;i++)
day=day+month(i);
day=day+365*(y2-y1-1);
for(i=1;i<m2;i++)
day=day+month(i);
day=day+d2;
for(i=y1+1;i<y2;i++)
{
t=leap(i);
if(t===1)
{
l++;
day++;
}
}
t=leap(y2);
if(t===1)
{
if(m2>2)
{
l++;
day++;
}
}
}
}
if(d2>=d1)
d1=d2-d1;
else
{
    --m2;
    d2=d2+30;
    d1=d2-d1;
}
if(m2>=m1)
m1=m2-m1;
else
{    
    y2--;
    m2=m2+12; 
    m1=m2-m1;   
}
y1=y2-y1;
re[0]=y1;
re[1]=m1;
re[2]=d1;
re[3]=day;
return re;
}
function month(m)
{
var c=0;
switch(m)
{
case 1:
c=31;
break;
case 2:
c=28;
break;
case 3:
c=31;
break;
case 4:
c=30;
break;
case 5:
c=31;
break;
case 6:
c=30;
break;
case 7:
c=31;
break;
case 8:
c=31;
break;
case 9:
c=30;
break;
case 10:
c=31;
break;
case 11:
c=30;
break; 
case 12:
c=31;
break;
}
return c;
}
function leap(y)
{
if(y%100===0)
{
 if(y%400===0)
  return 1;
 else
 return 0;
}
else if(y%4===0)
return 1;
else
return 0;
}

//MORTGAGE
//splitbill
//numberpalette splitbill
$("#crosssp").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else
    st2=st2.substring(0,st2.length-1);
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#7sp").click(function(){
    if(act===1)
    st1=st1+"7";
    else
    st2=st2+"7";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#8sp").click(function(){
    if(act===1)
    st1=st1+"8";
    else
    st2=st2+"8";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#9sp").click(function(){
    if(act===1)
    st1=st1+"9";
    else
    st2=st2+"9";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#4sp").click(function(){
    if(act===1)
    st1=st1+"4";
    else
    st2=st2+"4";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#5sp").click(function(){
    if(act===1)
    st1=st1+"5";
    else
    st2=st2+"5";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#6sp").click(function(){
    if(act===1)
    st1=st1+"6";
    else
    st2=st2+"6";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#1sp").click(function(){
    if(act===1)
    st1=st1+"1";
    else
    st2=st2+"1";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#2sp").click(function(){
    if(act===1)
    st1=st1+"2";
    else
    st2=st2+"2";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#3sp").click(function(){
    if(act===1)
    st1=st1+"3";
    else
    st2=st2+"3";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#0sp").click(function(){
    if(act===1)
    st1=st1+"0";
    else
    st2=st2+"0";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#decimalsp").click(function(){
    if(act===1)
    st1=st1+".";
    else
    st2=st2+".";
    $("#splitamt").val(st1);
    $("#people").val(st2);
});
$("#splitamt").click(function(){   
    act=1; 
});
$("#people").click(function(){ 
    act=2; 
});
$("#split").click(function(){
    st1=st2="";
    act=1;
    $("#splitamt").val(st1);
    $("#people").val(st2);
    $("#splitans").html(st2);   
});
$("#acsp").click(function(){
    st1=st2="";
    act=1;
    $("#splitamt").val(st1);
    $("#people").val(st2);
    $("#splitans").html(st2);  
});
$("#gosp").click(function(){
    st2=st1/st2;
    $("#splitans").html(st2.toFixed(2));  
});

//gst
//numberpalette gst
var a=0;
$("#crossgst").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    $("#origpr").val(st1);
});
$("#7gst").click(function(){
    if(act===1)
    st1=st1+"7";
    $("#origpr").val(st1);
});
$("#8gst").click(function(){
    if(act===1)
    st1=st1+"8";
    $("#origpr").val(st1);
});
$("#9gst").click(function(){
    if(act===1)
    st1=st1+"9";
    $("#origpr").val(st1);
});
$("#4gst").click(function(){
    if(act===1)
    st1=st1+"4";
    $("#origpr").val(st1);
});
$("#5gst").click(function(){
    if(act===1)
    st1=st1+"5";
    $("#origpr").val(st1);
});
$("#6gst").click(function(){
    if(act===1)
    st1=st1+"6";
    $("#origpr").val(st1);
});
$("#1gst").click(function(){
    if(act===1)
    st1=st1+"1";
    $("#origpr").val(st1);
});
$("#2gst").click(function(){
    if(act===1)
    st1=st1+"2";
    $("#origpr").val(st1);
});
$("#3gst").click(function(){
    if(act===1)
    st1=st1+"3";
    $("#origpr").val(st1);
});
$("#0gst").click(function(){
    if(act===1)
    st1=st1+"0";
    $("#origpr").val(st1);
});
$("#decimalgst").click(function(){
    if(act===1)
    st1=st1+".";
    $("#origpr").val(st1);
});
$("#origpr").click(function(){   
    act=1; 
});
$(".3g").click(function(){
    st2=3;
    $(".cgst").text(st2/2);
});
$(".5g").click(function(){
    st2=5;
    $(".cgst").text(st2/2);
});
$(".12g").click(function(){
    st2=12;
    $(".cgst").text(st2/2);    
});
$(".18g").click(function(){
    st2=18;
    $(".cgst").text(st2/2);
});
$(".28g").click(function(){
    st2=28;
    $(".cgst").text(st2/2);
});
$("#gst").click(function(){
    st1=st2="";
    act=1;
    $("#origpr").val(st1);
    $("#gstans").val(st2);
    $(".cgst").text(st2);   
});
$("#acgst").click(function(){
    st1=st2="";
    act=1;
    $("#origpr").val(st1);
    $("#gstans").html(st2);
    $(".cgst").text(st2);    
});
$("#gogst").click(function(){
    var m;
    $(".cgst").text(st2/2);
    st2=st1*st2/100;
    a=Number(st1)+Number(st2); 
    $("#gstans").html(a.toFixed(2));  
});

//personal loan
//numberpalette personal loan
var st3,st4,res=0,amt=0,p1=0,p2=0;
$("#crosspl").click(function(){ 
    if(act==1)     
    st1=st1.substring(0,st1.length-1);
    else if(act===2)
    st2=st2.substring(0,st2.length-1);
    else
    st3=st3.substring(0,st3.length-1);
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#7pl").click(function(){
    if(act===1)
    st1=st1+"7";
    else if(act===2)
    st2=st2+"7";
    else
    st3=st3+"7";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#8pl").click(function(){
    if(act===1)
    st1=st1+"8";
    else if(act===2)
    st2=st2+"8";
    else
    st3=st3+"8";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#9pl").click(function(){
    if(act===1)
    st1=st1+"9";
    else if(act===2)
    st2=st2+"9";
    else
    st3=st3+"9";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#4pl").click(function(){
    if(act===1)
    st1=st1+"4";
    else if(act===2)
    st2=st2+"4";
    else
    st3=st3+"4";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#5pl").click(function(){
    if(act===1)
    st1=st1+"5";
    else if(act===2)
    st2=st2+"5";
    else
    st3=st3+"5";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#6pl").click(function(){
    if(act===1)
    st1=st1+"6";
    else if(act===2)
    st2=st2+"6";
    else
    st3=st3+"6";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#1pl").click(function(){
    if(act===1)
    st1=st1+"1";
    else if(act===2)
    st2=st2+"1";
    else
    st3=st3+"1";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#2pl").click(function(){
    if(act===1)
    st1=st1+"2";
    else if(act===2)
    st2=st2+"2";
    else
    st3=st3+"2";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#3pl").click(function(){
    if(act===1)
    st1=st1+"3";
    else if(act===2)
    st2=st2+"3";
    else
    st3=st3+"3";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#0pl").click(function(){
    if(act===1)
    st1=st1+"0";
    else if(act===2)
    st2=st2+"0";
    else
    st3=st3+"0";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#decimalpl").click(function(){
    if(act===1)
    st1=st1+".";
    else if(act===2)
    st2=st2+".";
    else
    st3=st3+".";
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3);
});
$("#principal").click(function(){   
    act=1; 
    $("#numpaletteprsloan").removeClass("collapse");
});
$("#interest").click(function(){   
    act=2;
    $("#numpaletteprsloan").removeClass("collapse"); 
});
$("#duration").click(function(){   
    act=3; 
    $("#numpaletteprsloan").removeClass("collapse");
});
$("#starttime").click(function(){
    st4=$(this).val();
    $("#numpaletteprsloan").addClass("collapse");
});
$("#prsloan").click(function(){
    st1=st2=st3=st4="";
    act=1;
    p1=p2=0;    
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3); 
    $("#starttime").val(st4); 
    $("#numpaletteprsloan").addClass("collapse");
    $("#prsloancard").addClass("collapse");
});
$("#acpl").click(function(){
    st1=st2=st3=st4="";
    act=1;
    p1=p2=0;    
    $("#principal").val(st1);
    $("#interest").val(st2);
    $("#duration").val(st3); 
    $("#starttime").val(st4); 
    $("#numpaletteprsloan").addClass("collapse");
    $("#prsloancard").addClass("collapse");
});
$("#gopl").click(function(){
    res=0;
    amt=0;
    p1=p2=0;
    $("#numpaletteprsloan").addClass("collapse");
    $("#prsloancard").removeClass("collapse");
    st2=st2/1200;
res=Math.pow((1+st2),st3)*st1*st2;
res=res/(Math.pow((1+st2),st3)-1);
amt=res*st3;
$(".emitime").html(st3);
$(".emiamount").html(res.toFixed(2));
$(".totalamt").html(amt.toFixed(2));
p1=st1*100/amt;
p2=(amt-st1)*100/amt;
p1=Math.round(p1);
p2=Math.round(p2);
p1=p1+"%";
p2=p2+"%";
$(".pro1").css('width',p1);
$(".pro2").css('width',p2);
$(".tp").html(st1);
$(".ti").html((amt-st1).toFixed(2));
});