## Broad Phase Method 
test box bounding of two shapes

## Collision Information Class
- collision depth
- normal (depth direction)
- start, end

## Seperating Axis Theorem (SAT)

> Two convex polygons are not colliding if there exists a line (or axis) that is perpendicular to one of the given edges of the two polygons and when projecting all edges of the two polygons onto this axis results in no overlaps of the projected edges.

A simple SAT-based algorithm
- compute face normals
- project vertices onto the face normals
- identify bounds (find max and min project position on face normal)
- determine overlaps
- determining if collision has occurred with no additional information

An efficient SAT algorithm: the support points

A support point for a face normal of shape-A is defined to be the vertex position on shape-B where the vertex has the most *negative* (there can be no such vertex) distance from the corresponding edge of shape-A. When support points are defined for all face normals of a convex shape, the face normal of the smallest support point distance is the axis leading to the least interpenetration.
