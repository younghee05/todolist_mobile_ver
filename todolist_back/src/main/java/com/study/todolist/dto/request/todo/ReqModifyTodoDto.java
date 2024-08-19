package com.study.todolist.dto.request.todo;

import com.study.todolist.entity.Todo;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReqModifyTodoDto {
    private int todoId;
    private int userId;
    private String title;
    private String content;
    private String todoDateTime;
    private int important;
    private int busy;
    private int status;

    public Todo toEntity() {
        return Todo.builder()
                .todoId(todoId)
                .title(title)
                .content(content)
                .important(important)
                .busy(busy)
                .build();
    }
}
