package com.example.demo.controller;

import com.example.demo.dto.request.TodoRequest;
import com.example.demo.dto.response.ApiResponse;
import com.example.demo.dto.response.TodoResponse;
import com.example.demo.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<TodoResponse>>> getAllTodos() {
        List<TodoResponse> todos = todoService.getAllTodos();
        return ResponseEntity.ok(new ApiResponse<>(true, "Fetched Successfully", todos));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<TodoResponse>> getTodoById(@PathVariable Long id) {
        TodoResponse todo = todoService.getTodoById(id);
        return ResponseEntity.ok(new ApiResponse<>(true, "Todo fetched successfully", todo));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<TodoResponse>> createTodo(@RequestBody TodoRequest request) {
        TodoResponse todo = todoService.createTodo(request);
        return ResponseEntity.ok(new ApiResponse<>(true, "Todo created successfully", todo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<TodoResponse>> updateTodo(@PathVariable Long id,
                                                                 @RequestBody TodoRequest request) {
        TodoResponse todo = todoService.updateTodo(id, request);
        return ResponseEntity.ok(new ApiResponse<>(true, "Todo updated successfully", todo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
        return ResponseEntity.ok(new ApiResponse<>(true, "Todo deleted successfully", null));
    }
}
