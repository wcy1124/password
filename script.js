function sumbit()
{
  let r = "ROKKU1121";
  let n = document.getElementById("ans").value;
  if(n == r)
    {
      document.getElementById("ans").value = "ROKKU1121";
    }
  else
    {
      document.getElementById("ans").value = "";
    }
}
function key()
{
  let oder = document.getElementById("oder");
  if(oder.style.display == "block")
    {
      oder.style.display = "none";
    }
  else
    {
      oder.style.display = "block";
    }
}
function st()
{
  let tran = "MWFSP4454";
  let ar = document.getElementById("an").value;
  if(tran == ar)
    {
      document.getElementById("an").value = "MWFSP4454";
      document.getElementById("key1").style.display = "block";
      document.getElementById("sst").style.display = "block";
      document.getElementById("rn").style.display = "block";
      document.getElementById("hint2").style.display = "block";
    }
  else
    {
      document.getElementById("an").value = "";
    }
}
function keymove()
{
  let mo = document.getElementById("move");
  if(mo.style.display == "block")
    {
      mo.style.display = "none";
    }
  else
    {
      mo.style.display = "block";
    }
}
function sst()
{
  let paWo = "JTCPM1121";
  let moveBefore = document.getElementById("rn").value;
  if(moveBefore == paWo)
    {
      document.getElementById("rn").value = "JTCPM1121";
      document.getElementById("key2").style.display = "block";
      document.getElementById("cn").style.display = "block";               document.getElementById("rot").style.display = "block";
      document.getElementById("hint3").style.display = "block";
    }
  else
    {
      document.getElementById("rn").value = "";
    }
}
let b = document.getElementById("find");
function keyfind()
{
  if(b.style.display == "block")
    {
      b.style.display = "none";
    }
  else
    {
      b.style.display = "block";
    }
}
function rot()
{
  let last = document.getElementById("cn").value;
  let alphaA = "ROKKU";
  if(alphaA == last)
    {
      document.getElementById("cn").value = "ROKKU";
      document.getElementById("ans").style.display = "block";
      document.getElementById("sumbit").style.display = "block";
    }
  else
    {
      document.getElementById("cn").value = "";
    }
}
function bta()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "A";
}

function btb()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "B";
}
function btc()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "C";
}
function btd()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "D";
}
function bte()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "E";
}
function btf()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "F";
}
function btg()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "G";
}
function bth()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "H";
}
function bti()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "I";
}
function btj()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "J";
}
function btk()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "K";
}
function btl()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "L";
}
function btm()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "M";
}
function btn()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "N";
}
function bto()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "O";
}
function btp()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "P";
}
function btq()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "Q";
}
function btr()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "R";
}
function bts()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "S";
}
function btt()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "T";
}
function btu()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "U";
}
function btv()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "V";
}
function btw()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "W";
}
function btx()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "X";
}
function bty()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "Y";
}
function btz()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "Z";
}
function bt1()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "1";
}
function bt2()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "2";
}
function bt3()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "3";
}
function bt4()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "4";
}
function bt5()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "5";
}
function bt6()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "6";
}
function bt7()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "7";
}
function bt8()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "8";
}
function bt9()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "9";
}
function bt0()
{
  document.getElementById("ans").value = document.getElementById("ans").value + "0";
}
function hint1()
{
  let hin1 = document.getElementById("pic1");
  if(hin1.style.display == "block")
    {
      hin1.style.display = "none";
    }
  else
    {
      hin1.style.display = "block";
    }
}
function hint2()
{
  let hin2 = document.getElementById("pic2");
  if(hin2.style.display == "block")
    {
      hin2.style.display = "none";
    }
  else
    {
      hin2.style.display = "block";
    }
}
function hint3()
{
  let hin3 = document.getElementById("pic3");
  if(hin3.style.display == "block")
    {
      hin3.style.display = "none";
    }
  else
    {
      hin3.style.display = "block";
    }
}
function clos()
{
  document.getElementById("attu").style.display = "none";
}
let ran = document.getElementById("random");
function btn()
{
  let password = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = document.getElementById("num").value;
  let ran = "";
  for(let i = 1;i <= passwordLength;i++)
    {
      let ranDom = Math.floor(Math.random()*password.length);
      ran = ran +　password.substring(ranDom,ranDom + 1);
    }
  document.getElementById("random").value = ran;
}
function reset()
{
  document.getElementById("random").value = "";
  document.getElementById("num").value = "";
}
function cot()
{
  document.getElementById("mouse").style.display = "none";
  document.getElementById("screen").style.display = "block";
}
function reback()
{
  document.getElementById("mouse").style.display = "block";
  document.getElementById("screen").style.display = "none";
}