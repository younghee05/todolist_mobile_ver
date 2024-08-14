package com.study.todolist.test;

public class Test {

    public static int add(int a, int b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        int num = add(10, 20);
        System.out.println(num);

    }

}
