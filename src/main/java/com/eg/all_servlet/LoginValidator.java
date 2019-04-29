package com.eg.all_servlet;


import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginValidator
 */

public class LoginValidator extends HttpServlet {
	private static final long serialVersionUID = 1L;


	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		final String username = "kesav.muthuraj@anywhere.co";
		final String password = "1aAcvbds.";
		String passedUsername = request.getParameter("username");
		String passedPassword = request.getParameter("password");
		System.out.println(passedPassword + passedUsername);

		response.setContentType("text/plain");
		if (username.equals(passedUsername) && password.equals(passedPassword))
			response.getWriter().print("allow");
		else
			response.getWriter().print("don't allow");
	}

}
