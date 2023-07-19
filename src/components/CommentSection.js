const commentData = [
  {
    name: "Datta",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    reply: [
      {
        name: "Datta",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        reply: [],
      },
    ],
  },
  {
    name: "Datta",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    reply: [
      {
        name: "Datta",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        reply: [
          {
            name: "Datta",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            reply: [
              {
                name: "Datta",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                reply: [],
              },
            ],
          },
          {
            name: "Datta",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            reply: [],
          },
          {
            name: "Datta",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Datta",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    reply: [
      {
        name: "Datta",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        reply: [],
      },
    ],
  },
  {
    name: "Datta",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    reply: [],
  },
  {
    name: "Datta",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    reply: [],
  },
];

const CommentComponent = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className=" flex bg-slate-200 p-2 mb-1">
      <div>
        <img
          className="w-7"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
      <div className="flex-row ml-2 leading-normal">
        <div className="font-bold">{name}</div>
        <div className="font-normal text-sm">{text}</div>
      </div>
    </div>
  );
};

const ComponentList = ({commentProp}) => {
  return (
    <div>
      {commentProp.map((comments, index) => {
        return (
            <>
            <CommentComponent key={index} data={comments} />
            <div className="ml-5 border-l border-l-black pl-5 ">
             <ComponentList commentProp={comments.reply} />
            </div> 
            </>
        )
      })}
    </div>
  );
};

const CommentSection = () => {
  return (
    <div className="mt-4">
      {
          <ComponentList commentProp={commentData} />
      }
    </div>
  );
};

export default CommentSection;
