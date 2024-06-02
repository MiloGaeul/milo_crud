var uniqueidV, firstnameV, middlenameV, lastnameV, addressV, emailV;

function readFom() {
  uniqueidV = document.getElementById("uniqueid").value;
  firstnameV = document.getElementById("firstname").value;
  middlenameV = document.getElementById("middlename").value;
  lastnameV = document.getElementById("lastname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  Swal.fire("Data Read Successfully!");
  console.log(uniqueidV, firstnameV, middlenameV, lastnameV, addressV, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueidV)
    .set({
      uniqueid: uniqueidV,
      firstname: firstnameV,
      middlename: middlenameV,
      lastname: lastnameV,
      address: addressV,
      email: emailV,
    });
  Swal.fire("Data Inserted!");
  document.getElementById("uniqueid").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueidV)
    .on("value", function (snap) {
      document.getElementById("uniqueid").value = snap.val().uniqueid;
      document.getElementById("firstname").value = snap.val().firstname;
      document.getElementById("middlename").value = snap.val().middlename;
      document.getElementById("lastname").value = snap.val().lastname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueidV)
    .update({
      //   uniqueid: uniqueidV,
      firstname: firstnameV,
      middlename: middlenameV,
      lastname: lastnameV,
      address: addressV,
      email: emailV,
    });
  Swal.fire("Data Updated!");
  document.getElementById("uniqueid").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueidV)
    .remove();
  Swal.fire("Data Deleted!");
  document.getElementById("uniqueid").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};