package com.study.todolist.controller;

import com.study.todolist.dto.request.todo.ReqAddTodoDto;
import com.study.todolist.dto.request.todo.ReqModifyTodoDto;
import com.study.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/todo")
    public ResponseEntity<?> add(@RequestBody ReqAddTodoDto dto) {
        int successCount = todoService.addTodo(dto); // 1
        return ResponseEntity.created(null).body(successCount);
    }

    @GetMapping("/todolist")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok().body(todoService.getTodoList());
    }

    @GetMapping("/todo/counts")
    public ResponseEntity<?> getCounts() {
        return ResponseEntity.ok().body(todoService.getTodoCounts());
    }

    @PutMapping("/todo/{todoId}/status")
    public ResponseEntity<?> changStatus(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoService.changeStatus(todoId));
    }

    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> modify(@RequestBody ReqModifyTodoDto dto) {
        log.info("{}", dto);
        return ResponseEntity.ok().body(todoService.modifyTodo(dto));
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> delete(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoService.deleteTodo(todoId));
    }
}
