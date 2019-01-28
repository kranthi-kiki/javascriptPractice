function result(num1, num2) {
    if (num1 != num2)
    {
    num3 = Math.abs(num1 - 100);
    num4 = Math.abs(num2 - 100);
  
    if (num3 < num4)
    {
      return num1;
    }
    if (num4 < num3)
    {
      return num2;
    }
    return 0;
    }
    else
      return false;
  }
  
  console.log(near_100(12, 45));
  