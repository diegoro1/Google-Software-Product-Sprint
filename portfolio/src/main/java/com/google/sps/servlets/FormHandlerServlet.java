package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

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

    // readable system time
    SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss 'ET'");
    Date date = new Date(System.currentTimeMillis());
    String readableDate = formatter.format(date);

    // Print the value so you can see it in the server logs.
    System.out.println("------------------------");
    System.out.println("Name: " + name);
    System.out.println("Email: " + email);
    System.out.println("Number " + number);
    System.out.println("\nMessage: " + message);
    System.out.println("\ntime: " + readableDate);
    System.out.println("------------------------");

    // Send data to datastore
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Contacts");
    FullEntity contactEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("name", name)
            .set("email", email)
            .set("number", number)
            .set("message", message)
            .set("date", readableDate)
            .build();
    datastore.put(contactEntity);

    // redirects back to top of website
    response.sendRedirect("https://drodrigues-sps-spring21.uc.r.appspot.com");
  }
}