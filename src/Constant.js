export const ACTION_TYPE = {
    ADD_TODO_ITEM : "add todo item",
    DELETE_TODO_ITEM : "delete todo",
    TOGGLE_ITEM_DONE : "toggle item done"
};

export const INITIAL_TODO_ITEM_LIST = {
   todolist : [
        { id:1, title:"아기 분유 타기", done:false },
        { id:2, title:"아기 목욕 시키기", done:false },
        { id:3, title:"아기 젖병 소독하기", done:true },
        { id:4, title:"프로젝트 TDD 준비하기", done:true },
        { id:5, title:"프로젝트 Reactjs 스터디 준비하기", done:false },
        { id:6, title:"여름휴가 준비하기", done:true },
        { id:7, title:"Computer Graphics 개념 정리하기", done:true },
        { id:8, title:"프로젝트 DDD 설계하기", done:false },
        ]
};