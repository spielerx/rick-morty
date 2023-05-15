export const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "medium",
    }).format(date);
};
