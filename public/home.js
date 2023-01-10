function Home(){
  return (
    <Card
      txtcolor="black"
      header="MIT Bank Home"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
