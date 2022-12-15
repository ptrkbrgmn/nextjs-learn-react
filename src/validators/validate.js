import schemas from "./schemas/schemas";

async function validate(req) {
  const schema = getSchema(req);
  const json = await getJson(req);

  const { error, value } = schema.validate(json);
  if (error) {
    console.error(error);
  }
}

function getSchema(req) {
  const path = req.nextUrl.pathname;
  const lastPathSegment = path.substring(path.lastIndexOf("/") + 1);
  if (!schemas.hasOwnProperty(lastPathSegment)) throw new Error(`'${lastPathSegment}' schema is not exist`);
  return schemas[lastPathSegment];
}

async function getJson(req) {
  const blob = await req.blob();
  const text = await blob.text();
  const json = JSON.parse(text);
  return json;
}

export default validate;
