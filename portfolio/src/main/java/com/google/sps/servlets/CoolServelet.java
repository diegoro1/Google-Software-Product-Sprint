package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/cool-servelet")
public class CoolServelet extends HttpServlet {

    private int numberOfHits = 0;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        this.numberOfHits++;

        response.setContentType("text/html;");
        response.getWriter().println("<h1>Hello world!</h1>");
        response.getWriter().println("<p>This is my first servelt! how cool!</p>");
        response.getWriter().println("<p>Look how popular this page is.</p>");
        response.getWriter().println("<br>");
        response.getWriter().println("<p>Number of hits: " + this.numberOfHits + "</p>");
    }
}
