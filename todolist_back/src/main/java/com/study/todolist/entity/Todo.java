package com.study.todolist.entity;

import com.study.todolist.dto.response.todo.RespTodoDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Builder
// builder를 쓰고 싶을 때 NoArgsConstructor 와 AllArgsConstructor를 붙혀줘야 한다
@NoArgsConstructor // 기본 생성자 : public Todo() {};
@AllArgsConstructor // 전체 생성자 : public Todo(String (외부 변수명)) { this.(변수명) = (외부 변수명) };
@Data
public class Todo {
    private int todoId;
    private int userId;
    private String title;
    private String content;
    private int important;
    private int busy;
    private int status;
    private LocalDateTime todoDateTime;

    public RespTodoDto toTodoDto() {
        return RespTodoDto.builder()
                .todoId(todoId)
                .userId(userId)
                .title(title)
                .content(content)
                .important(important)
                .busy(busy)
                .status(status)
                .todoDateTime(todoDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")))
                .build();
    }
}
