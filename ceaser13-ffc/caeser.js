function rot13(str) { // LBH QVQ VG!
    let newStr = str;
    let sts = '';
    let add = 0;
    for (let i = 0; i < newStr.length; i++) {
      let uniStr = newStr.charCodeAt(i);
      if (uniStr >= 65 && uniStr <= 90) {
  
        let newUni = uniStr + 13;
        if (newUni > 90) {
  
          let substr = newUni - 90;
          add = 64 + substr;
        } else {
          add = newUni;
        }
        sts += String.fromCharCode(add);
      } else {
        sts += String.fromCharCode(uniStr);
      }
    }
    return sts;
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));