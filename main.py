import streamlit as st
import requests
import datetime

def receive() :
    url = "http://localhost:5000"
    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    source = requests.post(url, data=now)
    data = requests.get(url, data=source)
    st.json(data)

st.title("Mumbler")
st.button("일일리포트", on_click=receive)

