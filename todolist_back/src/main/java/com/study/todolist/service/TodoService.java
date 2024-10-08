package com.study.todolist.service;

import com.study.todolist.dto.request.todo.ReqAddTodoDto;
import com.study.todolist.dto.request.todo.ReqModifyTodoDto;
import com.study.todolist.dto.response.todo.RespTodoCountsDto;
import com.study.todolist.dto.response.todo.RespTodoDto;
import com.study.todolist.entity.Todo;
import com.study.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;


@Service
public class TodoService {

    @Autowired
    private TodoMapper todoMapper;

    public int addTodo(ReqAddTodoDto dto) {
        return todoMapper.save(dto.toEntity());
    }

    public List<RespTodoDto> getTodoList() {
        List<Todo> todoList = todoMapper.findAll();
        List<RespTodoDto> dtoList = new ArrayList<>(); // Todo를 RespTodoDto로 바꾸어 리스트에 담는다
        // 리스트에 하나씩 담기 위해 반복을 돌린다
        for(Todo todo : todoList) {
            dtoList.add(todo.toTodoDto());
        }


        return dtoList;
    }

    public RespTodoCountsDto getTodoCounts() {
        return todoMapper.getTodoCounts().toDto();
    }

    public int changeStatus(int todoId) {
        return todoMapper.changeStatus(todoId);
    }

    public int modifyTodo(ReqModifyTodoDto dto) {

        return todoMapper.modifyTodoByTodoId(dto.toEntity());
    }

    public int deleteTodo(int todoId) {
        return todoMapper.deleteByTodoId(todoId);
    }
}
