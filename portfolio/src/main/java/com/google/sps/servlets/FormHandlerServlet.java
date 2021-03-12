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

// TODO: prevent redirecting to "{url}/form-handler" page

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

    // logs message + info to server console
    private void logMessage(String name, String email, String number, String message, String date) {
        System.out.println("------------------------");
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Number " + number);
        System.out.println("\nMessage: " + message);
        System.out.println("\ntime: " + date);
        System.out.println("------------------------");
    }

    // returns formatted redable date and time (EST)
    private String dateAndTime() {
        SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss 'ET'");
        Date date = new Date(System.currentTimeMillis());

        return formatter.format(date);
    }

    // Send data to datastore
    private void store(String name, String email, String number, String message, String date) {
        Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
        KeyFactory keyFactory = datastore.newKeyFactory().setKind("Contacts");
        FullEntity contactEntity =
            Entity.newBuilder(keyFactory.newKey())
                .set("name", name)
                .set("email", email)
                .set("number", number)
                .set("message", message)
                .set("date", date)
                .build();
        datastore.put(contactEntity);
    }

    // checks if data submitted is not null and larger than 5 characters
    private Boolean checkIfValid(String message, String number, String email, String name) {
        if (message == null || message.length() < 5) {
            System.out.println("Message is too short");
            return false;
        } 
        if (number == null || number.length() < 5) {
            System.out.println("Number is too small");
            return false;
        }
        if (email == null || email.length() < 5) {
            System.out.println("Number is too small");
            return false;
        }
        if (name == null || name.length() < 5) {
            System.out.println("Number is too small");
            return false;
        }

        return true;
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Get the value entered in the form.
        String message = request.getParameter("message");
        String number = request.getParameter("number");
        String email = request.getParameter("email");
        String name = request.getParameter("name");

        Boolean dataIsSafe = checkIfValid(message, number, email, name);


        if (dataIsSafe) {
            // readable system time
            String readableDate = dateAndTime();
    
            // Prints values to console
            logMessage(name, email, number, message, readableDate);
    
            // Send data to datastore
            store(name, email, number, message, readableDate);  
        }

        // redirects back to top of website
        // response.sendRedirect("https://drodrigues-sps-spring21.uc.r.appspot.com");
    }
}
