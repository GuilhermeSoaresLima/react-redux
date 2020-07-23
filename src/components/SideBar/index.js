import React from "react";

import { connect } from "react-redux";

import * as CourseActions from "../../store/actions/course";

// const Sidebar = ({ modules, dispatch }) => (
const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>
              {lesson.title}
              <button
                onClick={() =>
                  //   dispatch(CourseActions.toggleLesson(module, lesson))
                  toggleLesson(module, lesson)
                }
              >
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

// export default connect((state) => ({ modules: state.course.modules }))(Sidebar);

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLesson: (module, lesson) =>
    dispatch(CourseActions.toggleLesson(module, lesson)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
