- mongoose:
    - `mongoose.Schema`: Used for defining the schema structure (capitalized).
    - `mongoose.model`: Used for creating a model from the schema (lowercase).
    - `TS` in mongoose, see note.ts
- `envalid`: see readme
- `TS` req, res:
    - `app.get("/", (req: Request, res: Response): Response => {`
    - `app.get("/", async (req: Request, res: Response): Promise<Response> => {`
    - `: Promise<Response>` - This indicates that the function returns a `Promise` that resolves to a `Response` object. 
- you cannot just do return res.status(), there must be a .json or .send or .end to send the response
# error handling in TS express routes
- every `Error` instance has a message property
- we should check that
```js
if(error instanceof Error) {
    errorMessage = error.message;
    ...
}
```
because we can throw anything not just `throw Error('boom');`
# TS
## controllers
for request handler functions for example:
```ts
router.get('/', notesController.getAllNotes);
```
can do this:
```ts
const getAllNotes: RequestHandler = async (req, res) => {...
```