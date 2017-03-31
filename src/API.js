/**
 * My API Sandbox
 *
 */


Sandbox.define('/killlist','GET', function(req, res){
  state.killlist = state.killlist || [];

  return res.json(state.killlist);
});

Sandbox.define('/killlist','POST', function(req, res){
  // Check the request, make sure it is a compatible type
  if (!req.is("application/json")) {
    return res.send(400, "Invalid content type, expected application/json");
  }

  // Set the type of response, sets the content type.
  res.type("application/json");

  // retrieve killlist, if there are none, init to empty array
  state.killlist = state.killlist || [];

  // persist person  by adding to the state object
  state.killlist.push(req.body);


  return res.json(req.body);
});

Sandbox.define('/killlist/{id}', 'PATCH', function(req, res){
  // Check the request, make sure it is a compatible type
  if (!req.is("application/json")) {
    return res.send(400, "Invalid content type, expected application/json");
  }

  // retrieve projects or, if there are none, init to empty array
  state.killlist = state.killlist || [];

  // route param {id} is available on req.params
  var personId = req.params.id;


  var person = _.find(state.killlist, {
    "id": personId
  });


  _.merge(person, req.body);


  return res.json(person);
});

Sandbox.define('/killlist','DELETE', function(req, res){
  state.killlist = [];

  // Send the response body.
  res.json({
    "status": "Task completed!"
  });
});
