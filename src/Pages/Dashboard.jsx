const [isThirdPaneOpen, setIsThirdPaneOpen] = useState(false);
const [selectedData, setSelectedData] = useState(null);

const handleCardClick = (item) => {
  setSelectedData(item);
  setIsThirdPaneOpen(true);
};

return (
  <>
    <Sidebar />
    <Topbar />
    <ItineraryList onCardClick={handleCardClick} />
    {isThirdPaneOpen && <ThirdPane data={selectedData} onClose={() => setIsThirdPaneOpen(false)} />}
  </>
);
