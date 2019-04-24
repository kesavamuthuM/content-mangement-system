/**
 * 
 */

var Combat = function() {
};

Combat.prototype.attack = function(attacker, defender) {
	if (attacker.calculateHit(defender))
		defender.takeDamage(attacker.damage);
}

var character = function() {
}

character.prototype.takeHit = function() {

}

character.prototype.takeDamage = function() {

}// the above both method will have complex calculations to make this one to
// work our motto is to do test so only we leave this one as like it

// calculateHit is going to be a complex method and setting it up to return true
// also be complex Inorder avoid these we create a stub objects to overcome
// these complex. This is the sample one but in reality the complex one also
// need to execute then only our src will work



// test using sinon and jasmine mainly creating stub at here

describe('combat attack', function() {
	/*it('should damage the defender if the hit is successful', function() {
		var combat = new Combat();
		var defender = sinon.stub(new character());
		var attacker = sinon.stub(new character());
		var simpleStub = sinon.stub();
		simpleStub.returns('hai');	
		attacker.damage = 5;
		attacker.calculateHit.onCall(0).returns(true);

		combat.attacker(attacker, defender);
		expect(defender.takeDamage.called).toBe(true);
		expect(defender.takeDamage.getCall(0).calledWith(5)).toBeTruthy();
	})
*/	
	//using mock
	
		it('should damage the defender if the hit is successful', function(){
			var combat = new Combat();
			var defender = new character();
			var mockDefender = sinon.mock(defender);
			var expectation = mockDefender.expects('takeDamage').once().withArgs(5);
			
			var callback = sinon.stub();
			alert(callback.withArgs('hai').returns(1));
			var attacker = sinon.stub(new character());
			attacker.damage = 5;
			attacker.calculateHit.returns(true);
		})
	
})
