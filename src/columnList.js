// DEPRECATED
const columnList = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    ...this.getColumnSearchProps("name")
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    ...this.getColumnSearchProps("city")
  },
  {
    title: "Province",
    dataIndex: "province",
    key: "province",
    ...this.getColumnSearchProps("Province")
  },
  {
    title: "Industry",
    dataIndex: "industry",
    key: "industry",
    ...this.getColumnSearchProps("industry")
  }
];

module.exports = {
  columnList
};
