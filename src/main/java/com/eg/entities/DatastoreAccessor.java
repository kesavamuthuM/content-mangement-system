package com.eg.entities;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;

public class DatastoreAccessor {
	private DatastoreService dataservice = DatastoreServiceFactory.getDatastoreService();

	public void storingDataToDatastore(String username, String emailId, String organisation, int contactNo,
			String gender) {
		Entity userdetails = new Entity("userdetails");
		userdetails.setProperty("username", username);
		userdetails.setProperty("emailId", emailId);
		userdetails.setProperty("organisation", organisation);
		userdetails.setProperty("contactNo", contactNo);
		userdetails.setProperty("gender", gender);
		dataservice.put(userdetails);
	}
}
