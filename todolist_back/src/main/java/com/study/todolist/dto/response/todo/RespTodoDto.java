package com.study.todolist.dto.response.todo;

import com.study.todolist.entity.Todo;
import lombok.Builder;
import lombok.Data;

import java.time.format.DateTimeFormatter;

@Builder
@Data
public class RespTodoDto {
    private int todoId;
    private int userId;
    private String title;
    private String content;
    private int important;
    private int busy;
    private int status;
    private String todoDateTime;


}
