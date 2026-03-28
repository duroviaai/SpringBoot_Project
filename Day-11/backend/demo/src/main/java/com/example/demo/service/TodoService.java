package com.example.demo.service;

import com.example.demo.dto.request.TodoRequest;
import com.example.demo.dto.response.TodoResponse;
import com.example.demo.entity.Todo;
import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.repository.TodoRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepo todoRepo;

    public List<TodoResponse> getAllTodos() {
        return todoRepo.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public TodoResponse getTodoById(Long id) {
        Todo todo = todoRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Todo not found with id: " + id));
        return mapToResponse(todo);
    }

    public TodoResponse createTodo(TodoRequest request) {
        Todo todo = new Todo();
        todo.setTitle(request.getTitle());
        todo.setDescription(request.getDescription());
        return mapToResponse(todoRepo.save(todo));
    }

    public TodoResponse updateTodo(Long id, TodoRequest request) {
        Todo todo = todoRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Todo not found with id: " + id));
        todo.setTitle(request.getTitle());
        todo.setDescription(request.getDescription());
        return mapToResponse(todoRepo.save(todo));
    }

    public void deleteTodo(Long id) {
        todoRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Todo not found with id: " + id));
        todoRepo.deleteById(id);
    }

    private TodoResponse mapToResponse(Todo todo) {
        return new TodoResponse(todo.getId(), todo.getTitle(), todo.getDescription());
    }
}
