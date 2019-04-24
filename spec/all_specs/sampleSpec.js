/**
 * 
 */
var myObj = {
		save: function(){
			
		},
		quantity: function(){
			return 5;
		},
		setValue: param => this.param = param
}

describe('going to spy on a function', function(){
	it('should spy on save', function(){
		var spy = spyOn(myObj, 'save');
		myObj.save();
		expect(spy).toHaveBeenCalled();
	})
	it('should spy on quatity through', function(){
		var spy = spyOn(myObj, 'quantity').and.callThrough();
		expect(myObj.quantity()).toBe(5);
	
	})
	it('should spy on the function that it called with denoted arguments', function(){
		var spy = spyOn(myObj, 'setValue');
		var mine = myObj.setValue(5);
		expect(spy).toHaveBeenCalledWith(5);
		// alert(jasmine.isSpy(spy));
		
	})
	it('compares the object ', () => {
		var foo = {
				name: 'what',
				age: 32
		};
		var ano = {
				name: 'what',
				age: 32
		};
		expect(foo).toEqual({ name: 'what', age: 32 });
		expect(foo).toEqual(ano);
	})
		
});


/*
 * describe('creating the spy using createSpy method', function(){ it('should
 * create the spy object with method', function(){ var spy =
 * jasmine.createSpy('myspy', ['firstMethod', 'secondMetod']); spyOn(myspy,
 * 'firstMethod').and.returnValue('hai');
 * expect(myspy.firstMethod()).toBe('hai'); }) fuck in this and. method is not
 * defined is showing don't know what is the reason behind this. })
 */



/**
 * from here we are going to use the sinon
 */

var mySUT = {
		callCallback: function(cb){
			cb();
		},
		callCallbackWithCallbackFunction: function(msg, cb){
			cb();
			return msg;
		},
		callCallbackWithReturnValue: function(cb){
			return cb();
		},
		callDependency: function(){
			return anotherObj.firstFunction();
		},
		callDependencyBetterOne: function(input){
			return 	input.firstFunction();
		}
};

var anotherObj = {
	firstFunction: function(){
		return 'hai';
	}
}

function realCallback(){
	return 5;
}
var mine = {
setUp: function(){
		sinon.spy($, 'ajax');
	},
	tearDown: function(){
		$.ajax.restore();
	},
	requestSender: function(){
		$.get('/login', function(data){
			if(data !== undefined)
				alert('haai');
			else 
				alert('bye');
		})
	}
}

afterAll(function(){
	sinon.restore();
})
describe('sinon spies', function(){
	
	it('should spy on callback', function(){
	var spy = sinon.spy();
	mySUT.callCallback(spy);
	expect(spy.called).toBeTruthy();
	});
	
	it('should spy on callback with has two arguments one is msg and other is callback', function(){
		var callbackSpy = sinon.spy();
		var msg = 'hai';
		var returnValue = mySUT.callCallbackWithCallbackFunction(msg, callbackSpy);
		expect(callbackSpy.called).toBeTruthy();
		expect(callbackSpy.calledWith(msg)).toBeFalsy();
		expect(returnValue).toBe('hai');
	})
	
	it('should spy on callback that it return real value', function(){
		var spy = sinon.spy(realCallback);
		var returnValue = mySUT.callCallbackWithReturnValue(spy);
		/**
		 * calling this one return the value 5 that it got lock into
		 * callCallbackWithReturnValue method to overcome we need to again
		 * return the received value then only the 5 will obtain here.
		 */
		expect(spy.called).toBeTruthy();
		expect(returnValue).toBe(5);
	});
	
	it('should spy on the method using call dependency better where the method is present in another object', function(){
		var spy = sinon.spy(anotherObj, 'firstFunction');
		var returnValue = mySUT.callDependencyBetterOne(anotherObj);
		//expect(spy).toEquals(anotherObj.firstFunction);
		expect(spy.called).toBeTruthy();
		expect(returnValue).toEqual('hai');
		mine.setUp();
		mine.tearDown();
		mine.requestSender();
	})
	
	it('should use the sinon assertion', function(){
		var spy = sinon.spy();
		spy();
		sinon.assert.called(spy);
	})
})
