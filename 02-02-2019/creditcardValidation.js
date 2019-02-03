function cardnumber(input)
{
  var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if(input.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Not a valid Visa credit card number!");
        return false;
        }
}