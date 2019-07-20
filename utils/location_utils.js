

export const verifyId = (id) => {
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    return (id);
  } else {
      throw new TypeError();
  }
};

export const validator = (req) => {
  let location = req.body.name;
  let males = req.body.male;
  let females = req.body.female;
  
  return new Promise ((resolve, reject) => {
    location = location.replace(/^\s+/g, '');
    if(!location)  {
      return reject ('this cannot be an empty string');
    }
    if(Number.isInteger(males) && Number.isInteger(females)) {
      return resolve (males + females);
    } else {
      return reject ('the number of males and females must be intergers');
    }
    
  });
};