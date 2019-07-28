let subMale;
let subFemales;


export const verifyId = (id) => {
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    return (id);
  } else {
      throw new TypeError();
  }
};
export  const subLocationPopulation = (req) => {
  subMale= req.body.sublocation.male;
  subFemales= req.body.sublocation.female;
  return new Promise ((resolve, reject) => {
    if(Number.isInteger(subMale) && Number.isInteger(subFemales)) {
      return resolve (subMale + subFemales);

    } else {
        return reject ('males and females should be numbers');
    }
    });
}
export const LocationValidator = (req) => {
  let location = req.body.name;
  const males = req.body.male;
  const females = req.body.female;
  if(req.body.sublocation !== undefined){
    subMale = req.body.sublocation.male;
    subFemales = req.body.sublocation.female;
  }


  return new Promise ((resolve, reject) => {
    location = location.replace(/^\s+/g, '');
    if(!location)  {
      return reject ('this cannot be an empty string');
    }
    if(Number.isInteger(males) && Number.isInteger(females)) {
        if(subMale > males || subFemales > females) {
        return reject('sublocation cannot have alot more people than the location');
      } else {
        return resolve (males + females);
      }
    } else {
      return reject ('the number of males and females must be intergers');
    }
  });
};
