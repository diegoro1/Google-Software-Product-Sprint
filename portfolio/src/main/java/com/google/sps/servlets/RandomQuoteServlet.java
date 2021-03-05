package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/random-string")
public class RandomQuoteServlet extends HttpServlet {

    private ArrayList<String> quotes = new ArrayList<String>();

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // pushing hard coded quotes
        quotes.add("\"You're off to great places, today is your day. Your mountain is waiting, so get on your way.\" - Dr. Seuss");
        quotes.add("\"It always seems impossible until it is done.\" - Nelson Mandela");
        quotes.add("\"Winning doesn't always mean being first. Winning means you're doing better than you've done before.\" - Bonnie Blair");

        // Converts quotes list to json using Gson
        String json = convertToJsonUsingGson(quotes);

        // Send the JSON as the response
        response.setContentType("application/json;");
        response.getWriter().println(json);
    }

    private String convertToJsonUsingGson(ArrayList<String> quotes) {
    Gson gson = new Gson();
    String json = gson.toJson(quotes);
    return json;
  }
}
