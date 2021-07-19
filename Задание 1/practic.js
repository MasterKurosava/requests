const xmlData = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const parse = new DOMParser;
let xmlStr = parse.parseFromString(xmlData, 'text/xml');

function person(xml) {
  let student = xml.querySelectorAll('student')
  let studentsInfo = {
    list: []
  };
  for (i = 0; i < student.length; i++) {

    let currentStudent = {
      name: `${student[i].querySelector('first').textContent} ${student[i].querySelector('second').textContent}`,
      age: student[i].querySelector('age').textContent,
      prof: student[i].querySelector('prof').textContent,
      lang: student[i].querySelector('name').getAttribute('lang')
    }
    studentsInfo.list.push(currentStudent);
  }
  return studentsInfo;
}
console.log(person(xmlStr));