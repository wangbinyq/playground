## Interpenetrations Resolve

- Projection Method: simple move the object's position so that it no longer penetrates others.
  - unstable
  - relaxation iteration
- Impulse Method: uses object velocities to compute and apply impulse to initiate the objects to move in the opposite directions at the point of collision.
- Penalty Method

## Impulse Method

Bounce on wall

v1 = dot(v1, n) * n + dot(v1, t) * t
v2 = -dot(v1, n) * n + dot(v1, t) * t

General case

vab1 = va1 - vb1
dot(vab1, n) = -e * dot(vab1, n)
