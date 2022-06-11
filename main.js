 function VND(input) {
    const output = [];
    const ty = Math.floor(input / 1000000000);
    if (input >= 1000000000) {
      output.push(`${ty} tỷ`);
    } else {
      const ty = 0;
    }
    const trieu = Math.floor(input - (ty*1000000000));
    const httrieu = Math.floor(trieu / 1000000);
    if (trieu >= 1000000) {
      output.push(`${httrieu} triệu`);
    }
    const nghin = ((ty*1000000000) + (httrieu*1000000));
    const ssnghin = Math.floor(input - nghin);
    const htnghin = Math.floor(ssnghin / 1000);
    if (ssnghin >= 1000) {
      output.push(`${htnghin} ngàn`);
    }
    const dong = ((ty*1000000000) + (httrieu*1000000) + (htnghin*1000));
    const htdong = Math.floor(input - dong);
    if (htdong > 0) {
      output.push(`${htdong} đồng`);
    }
    return [...output, ''] 
      .join(' ')
      .split(/\s/)
      .filter((e) => e)
      .map((e) => e.substr(0, 1).toUpperCase() + e.substr(1))
      .join(' ');
  }
  
  //Điều kiện: số tiền phải lớn hơn 1 triệu
  function BDS(input) {
    const output = [];
      const ty = input / 1000000000;
      if (input >= 1000000000) {
        output.push(`${ty.toLocaleString()} tỷ`);
      } else {
      const ty = 0;
      const trieu = Math.floor(input - (ty*1000000000));
      const httrieu = Math.floor(trieu / 1000000);
      if (trieu < 1000000000 && trieu > 1000000) {
        output.push(`${httrieu.toLocaleString()} triệu`);
      }
    }
    return [...output, ''] 
      .join(' ')
      .split(/\s/)
      .filter((e) => e)
      .map((e) => e.substr(0, 1).toUpperCase() + e.substr(1))
      .join(' ');
  }