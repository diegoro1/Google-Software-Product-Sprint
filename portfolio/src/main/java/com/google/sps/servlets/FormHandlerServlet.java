package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String message = request.getParameter("message");
    String number = request.getParameter("number");
    String email = request.getParameter("email");
    String name = request.getParameter("name");


    // Print the value so you can see it in the server logs.
    System.out.println("------------------------");
    System.out.println("Name: " + name);
    System.out.println("Email: " + email);
    System.out.println("Number " + number);
    System.out.println("\nMessage: " + message);
    System.out.println("------------------------");

    // redirects back to top of website
    response.sendRedirect("https://drodrigues-sps-spring21.uc.r.appspot.com");
  }
}