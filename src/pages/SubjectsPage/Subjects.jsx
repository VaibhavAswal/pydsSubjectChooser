import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { student } from "../../store/store";
import "./Subjects.css";

const Subjects = () => {
  const studentData = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!studentData.firstName) {
      navigate("/");
    }
  }, []);

	const clears = ()=>{
		dispatch(student.setGroup1(""));
		dispatch(student.setGroup2(""));
		dispatch(student.setGroup3(""));
		dispatch(student.setGroup4(""));
	}

  const setG1 = (option) => {
    if (
      (studentData.goal === "JEE" ||
        studentData.goal === "Banking" ||
        studentData.goal === "B.Com (Honors)") &&
      studentData.group4 !== "Math" &&
      option !== "Math"
    ) {
      toast.error(`Math is compulsory for ${studentData.goal}, cannot change`);
      return;
    } else {
      if (option === "Math" && studentData.group4 === "Math") {
        dispatch(student.setGroup4(""));
        toast("Removed math from group 4");
      }
      dispatch(student.setGroup1(option));
    }
  };

  const setG2 = (option) => {
    if (studentData.goal === "JEE" && option !== "Chemistry") {
      toast.error("Chemistry is compulsory for JEE, cannot change");
      return;
    } else if (studentData.goal === "Neet" && option !== "Chemistry") {
      toast.error("Chemistry is compulsory for Neet, cannot change");
      return;
    } else if (studentData.goal === "B.Com (Honors)" && option !== "BSt.") {
      toast.error("BSt. is compulsory for B.Com (Honors), cannot change");
      return;
    } else if (option === "BSt.") {
      dispatch(student.setGroup2(option));
      dispatch(student.setGroup3("Accounts"));
      toast.success("Accounts Auto selected with BSt.");
    } else if (option !== "BSt." && studentData.group3 === "Accounts") {
      toast.error("BSt. is compulsory with Accounts");
      return;
    } else if (option === "Economics" && studentData.group4 === "Economics") {
      toast.error("Economics already selected in group 4");
    } else {
      dispatch(student.setGroup2(option));
    }
  };

  const setG3 = (option) => {
    if (studentData.goal === "JEE" && option !== "Physics") {
      toast.error("Physics is compulsory for JEE, cannot change");
      return;
    } else if (studentData.goal === "Neet" && option !== "Physics") {
      toast.error("Physics is compulsory for Neet, cannot change");
      return;
    } else if (studentData.goal === "B.Com (Honors)" && option !== "Accounts") {
      toast.error("Accounts is compulsory for B.Com (Honors), cannot change");
      return;
    } else if (option !== "Accounts" && studentData.group2 === "BSt.") {
      toast.error("Accounts is compulsory with BSt.");
      return;
    } else if (option === "Accounts" && studentData.group2 !== "BSt.") {
      dispatch(student.setGroup3(option));
      dispatch(student.setGroup2("BSt."));
      toast.success("BSt. auto selected with accounts");
      return;
    } else {
      dispatch(student.setGroup3(option));
    }
  };

  const setG4 = (option) => {
    if (studentData.goal === "Neet" && option !== "Biology") {
      toast.error("Biology is compulsory for Neet, cannot change");
      return;
    } else if (
      (studentData.goal === "JEE" ||
        studentData.goal === "Banking" ||
        studentData.goal === "B.Com (Honors)") &&
      studentData.group1 !== "Math" &&
      option !== "Math"
    ) {
      toast.error(`Math is compulsory for ${studentData.goal}, cannot change`);
      return;
    } else if (option === "Computer Science" && studentData.group1 !== "Math") {
      toast("Select Math in group 1 to opt for Computer Science");
    } else if (option === "Economics" && studentData.group2 === "Economics") {
      toast.error("Economics already selected in group 2");
    } else {
      if (option === "Math" && studentData.group1 === "Math") {
        dispatch(student.setGroup1(""));
        toast("Removed math from group 1");
      }
      dispatch(student.setGroup4(option));
    }
  };

  const proceed = () => {
    if (
      !studentData.group1 ||
      !studentData.group2 ||
      !studentData.group3 ||
      !studentData.group4
    ) {
      toast.error("select one subject from all the groups");
      return;
    } else {
      navigate("/register/summary");
    }
  };

  return (
    <div className="SubjectsPage">
      <div className="subjectsIntro">
        <h2>Select subjects</h2>
        <p>* you can select one subject per group</p>
        <p>* check guidlines for help</p>
      </div>
      <div className="subjectGroup">
        <div>
          <h3>Group 1</h3>
        </div>
        <div
          className={`goalBox ${studentData.group1 === "Math" && "active"}`}
          onClick={() => setG1("Math")}
        >
          <div className={` ${studentData.group4 === "Math" && "Striked"}`}>
            <input
              type="radio"
              name="group1"
              checked={studentData.group1 === "Math"}
            />
            Math
          </div>
          <p className="warning">
            {(studentData.goal === "JEE" ||
              studentData.goal === "Banking" ||
              studentData.goal === "B.Com (Honors)") &&
              studentData.group4 !== "Math" &&
              `* Math is compulsory for ${studentData.goal}`}
            {studentData.group4 === "Math" &&
              "* Math already selected in groupt 4, tap to remove"}
          </p>
        </div>
        <div
          className={`goalBox ${
            studentData.group1 === "Psychology" && "active"
          }`}
          onClick={() => setG1("Psychology")}
        >
          <div
            className={` ${
              (studentData.goal === "JEE" ||
                studentData.goal === "Banking" ||
                studentData.goal === "B.Com (Honors)") &&
              studentData.group4 !== "Math" &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group1"
              checked={studentData.group1 === "Psychology"}
            />
            Psychology
          </div>
        </div>
        <div
          className={`goalBox ${studentData.group1 === "Hindi" && "active"} `}
          onClick={() => setG1("Hindi")}
        >
          <div
            className={`${
              (studentData.goal === "JEE" ||
                studentData.goal === "Banking" ||
                studentData.goal === "B.Com (Honors)") &&
              studentData.group4 !== "Math" &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group1"
              checked={studentData.group1 === "Hindi"}
            />
            Hindi
          </div>
        </div>
      </div>

      <div className="subjectGroup">
        <div>
          <h3>Group 2</h3>
        </div>
        <div
          className={`goalBox ${
            studentData.group2 === "Economics" && "active"
          } `}
          onClick={() => setG2("Economics")}
        >
          <div
            className={`${
              (studentData.goal === "JEE" ||
                studentData.goal === "Neet" ||
                studentData.group3 === "Accounts" ||
                studentData.group4 === "Economics" ||
                studentData.goal === "B.Com (Honors)") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group2"
              checked={studentData.group2 === "Economics"}
            />
            Economics
          </div>
        </div>
        <div
          className={`goalBox ${studentData.group2 === "BSt." && "active"} `}
          onClick={() => setG2("BSt.")}
        >
          <div
            className={`${
              (studentData.goal === "JEE" || studentData.goal === "Neet") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group2"
              checked={studentData.group2 === "BSt."}
            />
            BSt.
          </div>
          <p className="warning">
            {studentData.goal === "B.Com (Honors)" &&
              `* BS.t is compulsory for ${studentData.goal}`}
          </p>
          <p className="warning">
            {studentData.goal !== "B.Com (Honors)" &&
              "* Accounts will be auto selected with BSt."}
          </p>
        </div>
        <div
          className={`goalBox ${
            studentData.group2 === "Chemistry" && "active"
          } `}
          onClick={() => setG2("Chemistry")}
        >
          <div
            className={`${
              (studentData.goal === "B.Com (Honors)" ||
                studentData.group3 === "Accounts") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group2"
              checked={studentData.group2 === "Chemistry"}
            />
            Chemistry
          </div>
          <p className="warning">
            {(studentData.goal === "JEE" || studentData.goal === "Neet") &&
              `* Chemistry is compulsory for ${studentData.goal}`}
          </p>
        </div>
      </div>

      <div className="subjectGroup">
        <div>
          <h3>Group 3</h3>
        </div>
        <div
          className={`goalBox ${studentData.group3 === "History" && "active"} `}
          onClick={() => setG3("History")}
        >
          <div
            className={` ${
              (studentData.goal === "JEE" ||
                studentData.goal === "Neet" ||
                studentData.group2 === "BSt." ||
                studentData.goal === "B.Com (Honors)") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group3"
              checked={studentData.group3 === "History"}
            />
            History
          </div>
        </div>
        <div
          className={`goalBox ${studentData.group3 === "Physics" && "active"}`}
          onClick={() => setG3("Physics")}
        >
          <div
            className={` ${
              (studentData.goal === "B.Com (Honors)" ||
                studentData.group2 === "BSt.") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group3"
              checked={studentData.group3 === "Physics"}
            />
            Physics
          </div>
          <p className="warning">
            {(studentData.goal === "JEE" || studentData.goal === "Neet") &&
              `* Physics is compulsory for ${studentData.goal}`}
          </p>
        </div>
        <div
          className={`goalBox ${studentData.group3 === "Accounts" && "active"}`}
          onClick={() => setG3("Accounts")}
        >
          <div
            className={` ${
              (studentData.goal === "JEE" || studentData.goal === "Neet") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group3"
              checked={studentData.group3 === "Accounts"}
            />
            Accounts
          </div>
          <p className="warning">
            {studentData.goal === "B.Com (Honors)" &&
              `* Accounts is compulsory for ${studentData.goal}`}
          </p>
          <p className="warning">
            {studentData.goal !== "B.Com (Honors)" &&
              "* BS.t will be auto selected with accounts"}
          </p>
        </div>
        <div
          className={`goalBox ${studentData.group3 === "PE" && "active"} `}
          onClick={() => setG3("PE")}
        >
          <div
            className={` ${
              (studentData.goal === "JEE" ||
                studentData.goal === "Neet" ||
                studentData.group2 === "BSt." ||
                studentData.goal === "B.Com (Honors)") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group3"
              checked={studentData.group3 === "PE"}
            />
            PE
          </div>
        </div>
      </div>

      <div className="subjectGroup">
        <div>
          <h3>Group 4</h3>
        </div>
        <div
          className={`goalBox ${
            studentData.group4 === "Economics" && "active"
          }`}
          onClick={() => setG4("Economics")}
        >
          <div
            className={` ${
              ((studentData.goal === "JEE" && studentData.group1 !== "Math") ||
                studentData.group2 === "Economics" ||
                studentData.goal === "Neet") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group4"
              checked={studentData.group4 === "Economics"}
            />
            Economics
          </div>
        </div>
        <div
          className={`goalBox ${studentData.group4 === "Biology" && "active"}`}
          onClick={() => setG4("Biology")}
        >
          <div
            className={` ${
              studentData.goal === "JEE" &&
              studentData.group1 !== "Math" &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group4"
              checked={studentData.group4 === "Biology"}
            />
            Biology
          </div>
          <p className="warning">
            {studentData.goal === "Neet" &&
              `* Biology is compulsory for ${studentData.goal}`}
          </p>
        </div>
        <div
          className={`goalBox ${
            studentData.group4 === "Computer Science" && "active"
          }`}
          onClick={() => setG4("Computer Science")}
        >
          <div className={` ${studentData.group1 !== "Math" && "Striked"}`}>
            <input
              type="radio"
              name="group4"
              checked={studentData.group4 === "Computer Science"}
            />
            Computer Science
          </div>
          <p className="warning">
            "* Computer Science can only be selected with maths"
          </p>
        </div>
        <div
          className={`goalBox ${studentData.group4 === "Music" && "active"}`}
          onClick={() => setG4("Music")}
        >
          <div
            className={` ${
              ((studentData.goal === "JEE" && studentData.group1 !== "Math") ||
                studentData.goal === "Neet") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group4"
              checked={studentData.group4 === "Music"}
            />
            Music
          </div>
        </div>
        <div
          className={`goalBox ${studentData.group4 === "Art" && "active"}`}
          onClick={() => setG4("Art")}
        >
          <div
            className={` ${
              ((studentData.goal === "JEE" && studentData.group1 !== "Math") ||
                studentData.goal === "Neet") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group4"
              checked={studentData.group4 === "Art"}
            />
            Art
          </div>
        </div>
        <div
          className={`goalBox ${studentData.group4 === "Math" && "active"}`}
          onClick={() => setG4("Math")}
        >
          <div className={` ${studentData.group1 === "Math" && "Striked"}`}>
            <input
              type="radio"
              name="group4"
              checked={studentData.group4 === "Math"}
            />
            Math
          </div>
          <div className="warning">
            {(studentData.goal === "JEE" ||
              studentData.goal === "Banking" ||
              studentData.goal === "B.Com (Honors)") &&
              studentData.group1 !== "Math" &&
              `* Math is compulsory for ${studentData.goal}`}
            {studentData.group1 === "Math" &&
              "* Math already selected in group 1, tap to remove"}
          </div>
        </div>
        <div
          className={`goalBox ${studentData.group4 === "Dance" && "active"}`}
          onClick={() => setG4("Dance")}
        >
          <div
            className={` ${
              ((studentData.goal === "JEE" && studentData.group1 !== "Math") ||
                studentData.goal === "Neet") &&
              "Striked"
            }`}
          >
            <input
              type="radio"
              name="group4"
              checked={studentData.group4 === "Dance"}
            />
            Dance
          </div>
        </div>
      </div>

      <div className="subjectButtons">
        <button className="ClearSubjects" onClick={clears}>
          Clear
        </button>
        <button className="SubmitSubjects" onClick={proceed}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Subjects;
