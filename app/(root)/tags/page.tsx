import { getTags } from "@/lib/actions/tag.actions";

const Tags = async () => {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 2,
    query: "javascript",
  });
  const { tags } = data || {};
  console.log("TAGS", JSON.stringify(tags, null, 2));
  return (
    <div>
      <h1>Tags</h1>
    </div>
  );
};
export default Tags;
