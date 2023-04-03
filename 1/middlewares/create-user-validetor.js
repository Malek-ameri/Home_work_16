const createError = require("http-errors");

const createUserValidetoin = (req, res, next) => {
  const {
    firstName,
    lastName,
    gender = "not-set",
    birthday,
    phoneNumber,
    IDcode,
    city = "not-set",
    company,
    role = "employee",
  } = req.body;
  //  fristname validetion
  if (!firstName?.trim())
    return next(
      createError(400, "firstname is invalid. please enter valid firstname")
    );
  if (firstName.trim().length < 3 || firstName.trim().length > 30)
    return next(
      createError(
        400,
        "The fristname must be more than three characters and less than 50 characters"
      )
    );

  // gendervalidation
  if (!["male", "female", "not-set"].includes(gender))
    return next(
      createError(400, "Your gender is invalid. gender must be female or male")
    );

  // lastname validetion
  if (!lastName?.trim())
    return next(
      createError(400, "lastname is invalid. please enter valid lastname")
    );
  if (lastName.trim().length < 3 || lastName.trim().length > 30)
    return next(
      createError(
        400,
        "The lastname must be more than three characters and less than 50 characters"
      )
    );

  // birthday validetion
  if (!birthday?.trim()) return next(createError(400, "birthday is empty"));

  if (
    !birthday.match(
      /^\d{4}[\/](0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])$/g
    )
  )
    return next(
      createError(400, "Enter the date like this pattern yyyy/mm/dd")
    );

  // phonenumber validation
  if (!phoneNumber?.trim())
    return next(createError(400, "phoneNumber is empty"));

  if (!phoneNumber.match(/^(\+98|0)9\d{9}/g))
    return next(createError(400, "your phone number is invalid "));

  // ID code validation
  if (!IDcode?.trim()) return next(createError(400, "IDcode is empty"));

  if (!IDcode.match(/^\d{10}$/g))
    return next(createError(400, "Your ID code is in valide"));

  // city validation
  const cityOfIran = [
    "not-set",
    "Tehran",
    "Khorasan Razavi",
    "Azerbaijan Gharbi",
    "Alborz",
    "Isfahan",
    "Fars",
    "Khuzestan",
    "Mazandaran",
    "Azerbaijan Sharghi",
    "Kerman",
    "Gilan",
    "Sistan and Baluchistan",
    "Kermanshah",
    "Lorestan",
    "Hamadan",
    "Golestan",
    "Kurdistan",
    "Hormozgan",
    "Markazi",
    "Ardabil",
    "Qazvin",
    "Qom",
    "Yazd",
    "Zanjan",
    "Bushehr",
    "Chahar Mahaal and Bakhtiari",
    "Khorasa Shomali",
    "Kohgiluyeh and Boyer-Ahmad",
    " Khorasan jonobi",
    "Semnan",
    "Ilam",
  ];
  if (!city?.trim()) return next(createError(400, "city is empty"));

  if (!cityOfIran.includes(city))
    return next(
      createError(400, "You must write one of the provinces of Iran")
    );

  // compony validation
  if (!company?.trim())
    return next(
      createError(400, "company is invalid. please enter valid company")
    );
  if (company.trim().length < 2 || company.trim().length > 40)
    return next(
      createError(
        400,
        "The company must be more than 2 characters and less than 40 characters"
      )
    );

  // role validation
  if (!role?.trim()) return next(createError(400, "role is empty"));

  if (!['employee','director'].includes(role))
    return next(
      createError(400, "role is invalid. The rolu must employee or director.")
    );
    console.log(req.body)

  next();
};

module.exports = createUserValidetoin;
