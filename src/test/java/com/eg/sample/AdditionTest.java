package com.eg.sample;

import static org.junit.Assert.*;

import org.junit.Test;

import com.eg.entities.Addition;

public class AdditionTest {
	Addition add = new Addition();
	@Test
	public void test() {
		assertEquals(3, add.add(1, 2));
	}

}
